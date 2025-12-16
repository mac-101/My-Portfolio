import React, { useEffect, useState } from "react";
import pic from "../assets/pic.jpg";
import pic2 from "../assets/pic-6.jpeg";

export default function Hero() {
  const roles = [
    "Professional Web Developer",
    "Frontend Engineer",
    "React Developer",
    "UI/UX Focused Builder",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById("services");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-5 md:pt-20"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-40">
        <div
          className="w-full h-full animate__backInDown"
          style={{
            backgroundImage: `url(${pic2})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col space-y-8 text-white animate-fade-in">
            <div className="inline-flex">
              <p className="text-lg sm:text-xl px-4 py-2 border-2 border-white/50 rounded-full w-fit font-medium backdrop-blur-sm bg-white/10">
                Hello There!
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                I'm{" "}
                <span className="font-serif text-blue-300">
                  Charles MacAnthony
                </span>
              </h1>

              {/* Animated Role */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-purple-300 transition-all duration-500">
                {roles[currentRole]}
              </h2>

              <p className="text-gray-200 max-w-xl text-lg leading-relaxed">
                I help individuals and businesses turn ideas into modern,
                responsive, and high-performance web experiences using today’s
                best technologies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleViewPortfolio}
                className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-blue-500/30"
              >
                View My Portfolio
              </button>

              <button
                onClick={handleHireMe}
                className="px-8 py-3 text-lg font-semibold bg-transparent border-2 border-white hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Hire Me
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">2+</span>
                <span className="text-gray-300">Years Experience</span>
              </div>

              <div className="h-6 w-px bg-gray-400" />

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">10+</span>
                <span className="text-gray-300">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src={pic}
                alt="Charles MacAnthony"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
