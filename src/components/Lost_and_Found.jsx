import React, { useState } from "react";
import {
  Upload,
  MapPin,
  Calendar,
  FileText,
  Gift,
  ImagePlus,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import Navbar from "./Navbar";

function LostFoundDashboard() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
        <Navbar/>
    <div className="relative min-h-screen bg-black overflow-hidden py-24 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/10 blur-[140px] rounded-full"></div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-white/5 backdrop-blur-xl mb-8">
            <Sparkles className="w-4 h-4 text-cyan-300" />

            <span className="text-sm text-cyan-300 font-medium tracking-wide">
              AI Powered Lost & Found
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight">
            Recover Lost Items
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
              Smarter & Faster
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-8 leading-relaxed">
            Upload item details and let CampusOrigin intelligently connect
            owners and finders through AI-powered matching.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* LEFT SIDE FORM */}
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-[1px]">
            {/* Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>

            {/* Inner */}
            <div className="relative rounded-[36px] bg-black/80 backdrop-blur-3xl p-10 overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

              {/* Title */}
              <div className="relative z-10 mb-10">
                <h2 className="text-3xl font-semibold text-white">
                  Submit Lost / Found Item
                </h2>

                <p className="text-gray-400 mt-3">
                  Fill in the details carefully for better AI matching accuracy.
                </p>
              </div>

              {/* Form */}
              <form className="relative z-10 space-y-7">
                {/* Item Name */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Item Name
                  </label>

                  <div className="relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                    <input
                      type="text"
                      placeholder="Enter item name"
                      className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Description
                  </label>

                  <div className="relative">
                    <FileText className="absolute left-5 top-6 w-5 h-5 text-gray-500" />

                    <textarea
                      rows="5"
                      placeholder="Describe the item in detail..."
                      className="w-full rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pt-5 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="text-sm text-gray-300 mb-3 block">
                      Location
                    </label>

                    <div className="relative">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                      <input
                        type="text"
                        placeholder="Where was it lost?"
                        className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="text-sm text-gray-300 mb-3 block">
                      Date
                    </label>

                    <div className="relative">
                      <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                      <input
                        type="date"
                        className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-gray-400 outline-none focus:border-cyan-400/40 transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Reward */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Reward (Optional)
                  </label>

                  <div className="relative">
                    <Gift className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                    <input
                      type="text"
                      placeholder="Reward amount or gift"
                      className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 pl-14 pr-5 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 transition"
                    />
                  </div>
                </div>

                {/* Upload */}
                <div>
                  <label className="text-sm text-gray-300 mb-3 block">
                    Upload Item Image
                  </label>

                  <label className="group relative flex flex-col items-center justify-center w-full h-60 rounded-[28px] border border-dashed border-white/10 bg-white/[0.02] overflow-hidden cursor-pointer hover:border-cyan-400/30 transition">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition"></div>

                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImage}
                    />

                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="relative z-10 text-center">
                        <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mx-auto mb-5">
                          <ImagePlus className="w-7 h-7 text-cyan-300" />
                        </div>

                        <h4 className="text-white text-lg font-medium">
                          Upload Item Image
                        </h4>

                        <p className="text-gray-500 text-sm mt-2">
                          Drag & drop or click to upload
                        </p>
                      </div>
                    )}
                  </label>
                </div>

                {/* Submit Button */}
                <button className="group relative w-full overflow-hidden rounded-2xl p-[1px] mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>

                  <div className="relative h-16 rounded-2xl bg-black flex items-center justify-center gap-3 text-white font-medium text-lg group-hover:bg-black/90 transition">
                    Submit Item
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* AI Match Card */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 p-[1px] mb-8">
                  <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-semibold text-white leading-tight">
                  AI Matching System
                </h3>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  Our AI compares uploaded images, descriptions, and metadata to
                  intelligently connect owners and finders faster than
                  traditional systems.
                </p>

                {/* Steps */}
                <div className="space-y-5 mt-10">
                  {[
                    "Upload Item Details",
                    "AI Analyzes & Matches",
                    "Connect Owner & Finder",
                    "Recover Belongings Faster",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center text-cyan-300 font-medium">
                        {index + 1}
                      </div>

                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  value: "AI",
                  label: "Powered Matching",
                },
                {
                  value: "24/7",
                  label: "Active Recovery",
                },
                {
                  value: "Smart",
                  label: "Campus Tracking",
                },
                {
                  value: "Secure",
                  label: "Verified Platform",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-purple-500/[0.03]"></div>

                  <div className="relative z-10">
                    <h4 className="text-3xl font-semibold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                      {item.value}
                    </h4>

                    <p className="text-gray-400 text-sm mt-2">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LostFoundDashboard;
