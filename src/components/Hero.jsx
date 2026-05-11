import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Check if mobile on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let startTime = Date.now();

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Update mobile state for canvas
      setIsMobile(window.innerWidth < 768);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star properties - adjusted for mobile
    const stars = [];
    const connections = [];
    const starCount = isMobile ? 40 : 60; // Increased to 40 on mobile

    // Create stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: isMobile ? Math.random() * 1 + 0.6 : Math.random() * 1.2 + 0.8, // Slightly smaller on mobile
        vx: (Math.random() - 0.5) * (isMobile ? 0.07 : 0.1), // Adjusted speed
        vy: (Math.random() - 0.5) * (isMobile ? 0.07 : 0.1),
        opacity: Math.random() * 0.6 + 0.4,
        pulseSpeed: Math.random() * 0.008 + 0.004,
        pulseDirection: 1,
        connected: false,
      });
    }

    // Pre-calculate potential connections
    const MAX_CONNECTION_DISTANCE = isMobile ? 120 : 200; // Adjusted for mobile
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
            progress: 0, // 0 to 1 for animation progress
            animationStart: Math.random() * 10000, // Stagger start times
            speed: 0.0001 + Math.random() * 0.0002, // Random animation speed
          });
        }
      }
    }

    // Sort connections by distance (closer ones connect first)
    potentialConnections.sort((a, b) => a.distance - b.distance);

    // Limit connections on mobile for cleaner look but not too few
    const maxConnections = isMobile
      ? Math.min(30, potentialConnections.length)
      : potentialConnections.length;
    const activeConnections = potentialConnections.slice(0, maxConnections);

    const animate = () => {
      const currentTime = Date.now() - startTime;

      // Clear with pure black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update connection animations
      activeConnections.forEach((connection) => {
        if (currentTime > connection.animationStart) {
          connection.progress = Math.min(
            1,
            (currentTime - connection.animationStart) * connection.speed
          );
        }
      });

      // Draw animated connections - thinner on mobile
      ctx.strokeStyle = "rgba(100, 200, 255, 0.3)";
      ctx.lineWidth = isMobile ? 0.7 : 1;

      activeConnections.forEach((connection) => {
        if (connection.progress > 0) {
          const star1 = stars[connection.star1];
          const star2 = stars[connection.star2];

          // Calculate current connection progress
          const currentProgress = connection.progress;
          const easeProgress = 1 - Math.pow(1 - currentProgress, 3); // Ease out animation

          // Draw the connecting line with progress animation
          ctx.globalAlpha = easeProgress * (isMobile ? 0.3 : 0.4);
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);

          if (currentProgress < 1) {
            // Animate line drawing from star1 to star2
            const midX = star1.x + (star2.x - star1.x) * easeProgress;
            const midY = star1.y + (star2.y - star1.y) * easeProgress;
            ctx.lineTo(midX, midY);

            // Draw a glowing dot at the end of the animated line
            ctx.fillStyle = `rgba(100, 200, 255, ${
              easeProgress * (isMobile ? 0.4 : 0.6)
            })`;
            ctx.beginPath();
            ctx.arc(
              midX,
              midY,
              isMobile ? 1.5 * easeProgress : 2 * easeProgress,
              0,
              Math.PI * 2
            );
            ctx.fill();
          } else {
            // Full connection
            ctx.lineTo(star2.x, star2.y);
          }

          ctx.stroke();
        }
      });

      // Draw connection circles around fully connected stars - simplified for mobile
      activeConnections.forEach((connection) => {
        if (connection.progress === 1) {
          const star1 = stars[connection.star1];
          const star2 = stars[connection.star2];

          // Draw a subtle circle around connected pairs (simplified on mobile)
          const centerX = (star1.x + star2.x) / 2;
          const centerY = (star1.y + star2.y) / 2;
          const radius = connection.distance / 2;

          ctx.globalAlpha = isMobile ? 0.05 : 0.1;
          ctx.strokeStyle = "rgba(100, 200, 255, 0.2)";

          if (!isMobile) {
            ctx.setLineDash([5, 5]);
          }

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();

          if (!isMobile) {
            ctx.setLineDash([]);
          }
        }
      });

      // Update and draw stars
      stars.forEach((star) => {
        // Update position with boundary check
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        // Keep stars within bounds
        star.x = Math.max(0, Math.min(canvas.width, star.x));
        star.y = Math.max(0, Math.min(canvas.height, star.y));

        // Pulsing effect
        star.opacity += star.pulseSpeed * star.pulseDirection;
        if (star.opacity > 0.8 || star.opacity < 0.3) {
          star.pulseDirection *= -1;
        }

        // Draw star with glow effect - adjusted for mobile
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * (isMobile ? 3 : 4)
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(
          0.4,
          `rgba(100, 200, 255, ${star.opacity * 0.4})`
        );
        gradient.addColorStop(1, "rgba(100, 200, 255, 0)");

        ctx.globalAlpha = 1;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(
          star.x,
          star.y,
          star.radius * (isMobile ? 3 : 4),
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Star core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw a subtle ring around each star - simplified on mobile
        ctx.globalAlpha = isMobile ? 0.2 : 0.3;
        ctx.strokeStyle = `rgba(100, 200, 255, ${
          star.opacity * (isMobile ? 0.3 : 0.5)
        })`;
        ctx.beginPath();
        ctx.arc(
          star.x,
          star.y,
          star.radius * (isMobile ? 4 : 6),
          0,
          Math.PI * 2
        );
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isMobile]); // Re-run effect when isMobile changes

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navItems = [
  {
    name: "Senior-Junior Connect",
    path: "/seniorjuniorconnect",
  },
  {
    name: "Communities",
    path: "/communities",
  },
  {
    name: "Lost & Found",
    path: "/lostandfound",
  },
  {
    name: "Complaint Box",
    path: "/complaint",
  },
  {
    name: "Result",
    path: "/result",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Pure Black Universe Background */}
      <div className="fixed inset-0 overflow-hidden bg-black">
        {/* Stars Constellation Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Very subtle nebula effects - smaller on mobile */}
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/5 rounded-full mix-blend-soft-light filter blur-xl sm:blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/5 rounded-full mix-blend-soft-light filter blur-xl sm:blur-3xl animate-float-medium"></div>

        {/* Grid Pattern Overlay - Very subtle */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* ------------------ PROFESSIONAL NAVBAR ------------------ */}
      <header className="relative z-50 py-4 md:py-6">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <div className="w-32 md:w-44">
                <img
                  src="/src/assets/logo.png"
                  alt="CampusOrigin Logo"
                  className="w-full h-auto"
                />
              </div>
            </NavLink>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.name}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop CTA Button - NAVBAR JOIN BUTTON */}
            <div className="relative hidden md:inline-flex group">
              <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition duration-300"></div>
              <NavLink
                to="/register"
                className="relative px-2 md:px-8 py-2 md:py-4 rounded-full bg-black text-white font-semibold text-sm md:text-lg transition duration-300 group-hover:scale-105 w-full text-center block"
              >
                🚀 Join Campus
              </NavLink>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl p-4 animate-slideDown">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-3 border-t border-white/10">
                  {/* Mobile Join Campus Button - Same style as desktop */}
                  <div className="relative group w-full">
                    <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition duration-300"></div>
                    <NavLink
                      to="/register"
                      className="relative block w-full py-3 text-center rounded-full bg-black text-white font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join Campus
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ------------------ STUNNING HERO SECTION ------------------ */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center relative z-10">
            {/* Animated Tagline */}
            <div
              className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-6 md:mb-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-ping mr-2 md:mr-3"></div>
              <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                🌟 Watch Students Connect in Real-Time
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 md:mb-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Where Students
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient mt-2 md:mt-0">
                Connect & Grow
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-2 md:px-0 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Every student is a star — unique, bright, full of potential.
              CampusOrigin connects these stars, empowering them with verified
              communities, real conversations, and tools that{" "}
              <span className="text-cyan-400">help them shine together!</span>
            </p>

            {/* CTA Buttons - Restored original button style */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center mt-8 md:mt-12 gap-4 md:gap-5 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Main CTA Button - Same style as desktop */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition duration-300"></div>
                <NavLink
                  to="/register"
                  href="#"
                  className="relative px-2  md:px-8 py-2 md:py-4 rounded-full bg-black text-white font-semibold text-sm md:text-lg transition duration-300 group-hover:scale-105 w-full text-center block"
                >
                  🚀 Join Your Campus
                </NavLink>
              </div>

              <a
                href="#"
                className=" md:px-8 py-2 md:py-4 border border-gray-600 hover:border-cyan-400 rounded-full text-white font-semibold text-sm md:text-lg transition duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-full sm:w-auto text-center block"
              >
                📚 Launching soon
              </a>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mt-12 md:mt-20 transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Feature cards */}
            <div className="rounded-xl md:rounded-2xl p-4 md:p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🔍</span>
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                AI Lost & Found
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Smart item recovery powered by AI and campus verification
              </p>
            </div>

            <div className="rounded-xl md:rounded-2xl p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">👥</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                Skill Communities
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Connect with peers based on skills, interests, and projects
              </p>
            </div>

            <div className="rounded-xl md:rounded-2xl p-4 md:p-6 bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🎯</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                Senior-Junior Connect
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Guided mentorship and knowledge sharing across batches
              </p>
            </div>

            <div className="rounded-xl md:rounded-2xl p-4 md:p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <span className="text-xl md:text-2xl">🛡️</span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                Anonymous Complaint Box
              </h3>
              <p className="text-gray-300 text-xs md:text-sm">
                Safe space for reporting concerns with campus verification
              </p>
            </div>
          </div>

          {/* Mobile-specific bottom gradient */}
          <div className="md:hidden absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }
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
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 640px) {
          .absolute.-top-20.-right-20,
          .absolute.-bottom-20.-left-20 {
            transform: scale(0.5);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
