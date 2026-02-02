import React from 'react'
import { ExternalLink, Github, Sparkles, Layout, Code2, Globe } from 'lucide-react'

// Import existing images
import ecommerceImg from '../assets/school (2).png'
import schoolSite from '../assets/school (1).png'
import voting from '../assets/school (4).png'
import business from '../assets/school (3).png'

export default function ProjectLibrary() {
  const projects = [
    {
      title: "HealthCore V1",
      category: "Healthcare OS",
      description: "Comprehensive medical ecosystem with real-time doctor/patient sync.",
      tags: ["Firebase", "React", "Realtime DB"],
      link: "#", // Replace with actual link
      github: "#",
      image: business // Using existing asset for now
    },
    {
      title: "VoteLinkr",
      category: "Real-time App",
      description: "Instant voting platform for contests with live leaderboard updates.",
      tags: ["Firestore", "Tailwind", "Auth"],
      link: "http://votelinkr-ui.netlify.app",
      github: "https://github.com/mac-101",
      image: voting
    },
    {
      title: "ShopCart",
      category: "E-Commerce",
      description: "Modern retail experience with full cart logic and admin inventory tools.",
      tags: ["React", "API", "Redux"],
      link: "http://shopcart-demo.netlify.app",
      github: "https://github.com/mac-101",
      image: ecommerceImg
    },
    {
      title: "CleverSchool",
      category: "EdTech",
      description: "Portal for student management, grading, and online presence.",
      tags: ["HTML", "CSS", "JS"],
      link: "http://cleverschool.netlify.app",
      github: "https://github.com/mac-101",
      image: schoolSite
    },
    // Add 6 more objects here to reach 10 projects
    {
      title: "FinTrack",
      category: "Fintech",
      description: "Personal expense tracker with data visualization and goal setting.",
      tags: ["React", "Chart.js"],
      link: "#",
      github: "#",
      image: business
    },
    {
      title: "SocialPulse",
      category: "Social Media",
      description: "Minimalist social feed with image uploads and real-time comments.",
      tags: ["Cloudinary", "Firebase"],
      link: "#",
      github: "#",
      image: voting
    },
    {
        title: "CryptoView",
        category: "Trading",
        description: "Real-time crypto price tracker using CoinGecko API.",
        tags: ["API", "Axios"],
        link: "#",
        github: "#",
        image: ecommerceImg
    },
    {
        title: "DevPortfolio V1",
        category: "Portfolio",
        description: "Previous iteration of my personal brand site.",
        tags: ["GSAP", "React"],
        link: "#",
        github: "#",
        image: schoolSite
    },
    {
        title: "TaskMaster",
        category: "Productivity",
        description: "Kanban board for team task management and deadling tracking.",
        tags: ["DragDrop", "Context"],
        link: "#",
        github: "#",
        image: business
    },
    {
        title: "WeatherPro",
        category: "Utility",
        description: "Location-based weather forecasting with dynamic backgrounds.",
        tags: ["OpenWeather", "React"],
        link: "#",
        github: "#",
        image: voting
    }
  ];

  return (
    <section id="library" className="py-20 px-4 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        
        {/* Minimal Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
             <div className="h-px w-8 bg-blue-600"></div>
             <span className="text-xs font-black uppercase tracking-widest text-blue-600">Project Library</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Build <span className="text-slate-400 font-medium italic italic">Archive</span>
          </h2>
        </div>

        {/* Project Grid - 10 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy" // Critical for performance with 10+ projects
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                      <Globe size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                {/* Tags & Tech */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Footer */}
        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center">
          <h4 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">Ready to start something new?</h4>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">Open for collaborations on Healthcare, Fintech, and Real-time application systems.</p>
          <button className="px-10 py-4 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-slate-900 transition-all">
            Drop a message
          </button>
        </div>
      </div>
    </section>
  )
}