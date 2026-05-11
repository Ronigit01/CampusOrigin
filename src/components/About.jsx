import React, { useState, useEffect, useRef } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  const aboutRef = useRef(null);

  // Check when About section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let startTime = Date.now();

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create stars
    const stars = [];
    const connections = [];
    const starCount = 30;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.8 + 1.2,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.004 + 0.002,
        pulseDirection: 1,
      });
    }

    // Pre-calculate potential connections
    const MAX_CONNECTION_DISTANCE = 220;
    const potentialConnections = [];

    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_CONNECTION_DISTANCE) {
          potentialConnections.push({
            star1: i,
            star2: j,
            distance: distance,
            progress: 0,
            animationStart: Math.random() * 20000,
            speed: 0.00005 + Math.random() * 0.00008,
          });
        }
      }
    }

    // Sort connections by distance
    potentialConnections.sort((a, b) => a.distance - b.distance);

    const animate = () => {
      const currentTime = Date.now() - startTime;

      // Clear with dark background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update connection animations
      potentialConnections.forEach((connection) => {
        if (currentTime > connection.animationStart) {
          connection.progress = Math.min(
            1,
            (currentTime - connection.animationStart) * connection.speed
          );
        }
      });

      // Draw animated connections
      ctx.strokeStyle = "rgba(100, 180, 255, 0.25)";
      ctx.lineWidth = 0.8;

      potentialConnections.forEach((connection) => {
        if (connection.progress > 0) {
          const star1 = stars[connection.star1];
          const star2 = stars[connection.star2];

          const currentProgress = connection.progress;
          const easeProgress = 1 - Math.pow(1 - currentProgress, 3);

          ctx.globalAlpha = easeProgress * 0.3;
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);

          if (currentProgress < 1) {
            const midX = star1.x + (star2.x - star1.x) * easeProgress;
            const midY = star1.y + (star2.y - star1.y) * easeProgress;
            ctx.lineTo(midX, midY);

            // Connection progress dot
            ctx.fillStyle = `rgba(100, 200, 255, ${easeProgress * 0.5})`;
            ctx.beginPath();
            ctx.arc(midX, midY, 1.5 * easeProgress, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.lineTo(star2.x, star2.y);
          }
          ctx.stroke();
        }
      });

      // Update and draw stars
      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        star.x = Math.max(0, Math.min(canvas.width, star.x));
        star.y = Math.max(0, Math.min(canvas.height, star.y));

        star.opacity += star.pulseSpeed * star.pulseDirection;
        if (star.opacity > 0.8 || star.opacity < 0.3) {
          star.pulseDirection *= -1;
        }

        // Star glow
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 4
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(
          0.4,
          `rgba(100, 200, 255, ${star.opacity * 0.3})`
        );
        gradient.addColorStop(1, "rgba(100, 200, 255, 0)");

        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Star core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div ref={aboutRef} className="relative min-h-screen">
      {/* Background Canvas - Positioned relative to About section */}
      <div className="fixed inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        {/* Very subtle nebula effects */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/3 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/3 rounded-full mix-blend-soft-light filter blur-3xl"></div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-32">
          {/* Animated Tagline */}
          <div
            className={`inline-flex items-center px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mr-3"></div>
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🌟 Our Celestial Journey
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Building a
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Campus Universe
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl text-gray-300 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Where every student is a star, every connection forms a
            constellation, and together we illuminate the academic journey.
          </p>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="rounded-2xl p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition duration-300">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Cosmic Mission
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  CampusOrigin was born from observing that students are like
                  brilliant stars scattered across an academic universe - full
                  of potential but often isolated in their orbits.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We're creating the gravitational force that pulls these bright
                  minds together, transforming isolated campus experiences into
                  vibrant constellations of collaboration and growth.
                </p>
                <div className="flex items-center space-x-3 mt-8">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 text-sm">
                    Launching brighter futures since 2023
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {[
                {
                  icon: "🎯",
                  title: "Our Vision",
                  desc: "An interconnected galaxy of campuses where knowledge flows as freely as starlight",
                  color: "bg-cyan-500/20",
                },
                {
                  icon: "💫",
                  title: "Our Values",
                  desc: "Authentic connections, inclusive communities, and innovation through collaboration",
                  color: "bg-purple-500/20",
                },
                {
                  icon: "🚀",
                  title: "Our Promise",
                  desc: "To continuously expand our constellation of features for student success",
                  color: "bg-pink-500/20",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl p-12 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 backdrop-blur-md text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Growing Universe?
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Become part of a constellation that's transforming campus life
              across the galaxy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <div className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:scale-105"></div>
                <a
                  href="#"
                  className="relative px-8 py-4 bg-black rounded-full text-white font-semibold text-lg transition duration-300 group-hover:scale-105"
                >
                  🚀 Launch Your Campus
                </a>
              </div>

              <a
                href="#"
                className="px-8 py-4 border border-gray-600 hover:border-cyan-400 rounded-full text-white font-semibold text-lg transition duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                ✨ Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default About;
