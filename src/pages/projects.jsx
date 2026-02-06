import React from 'react'
import { Github, Globe, ArrowLeft } from 'lucide-react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Import existing images
import ecommerceImg from '../assets/school (2).png'
import healthcore from '../assets/healthcoretech.png'
import schoolSite from '../assets/school (1).png'
import fastfood from '../assets/tastybitefastfood.png'
import business from '../assets/school (3).png'
import voting from '../assets/school (4).png'


export default function ProjectLibrary() {
  const projects = [
    {
      title: "HealthCore Tech",
      category: "Healthcare OS",
      description: "Full-featured online healthcare platform for specialist discovery, and appointment scheduling",
      tags: ["React", "Firebase", "Rest Api", "Tailwind"],
      image: healthcore,
      link: "http://healthcoretech.netlify.app",
      github: "https://github.com/mac-101"
    },
    {
      title: "TastyBite Fast Food",
      category: "Fast Food",
      description: "Modern fast food delivery platform with menu management and order tracking",
      tags: ["Html", "CSS", "JavaScript", "Tailwind"],
      image: fastfood,
      link: "http://tastybitefastfood.netlify.app",
      github: "https://github.com/mac-101"
    },
    {
      title: "Clever School",
      category: "Education",
      description: "A school online presence and management platform",
      tags: ["Html", "API", "CSS", "JavaScript"],
      image: schoolSite,
      link: "http://cleverschool.netlify.app",
      github: "https://github.com/mac-101"
    },
    { title: "FinTrack", category: "Fintech", description: "Personal expense tracker with data visualization and goal setting.", tags: ["React", "Chart.js"], link: "smartbiz-os.netlify.app", github: "https://github.com/mac-101", image: business },
    
    {
      title: "VoteLinkr",
      category: "Voting App",
      description: "Real-time voting application for contests and competitions",
      tags: ["Firestore", "Tailwind", "Firebase Auth", "React", "Context API"],
      image: voting,
      link: "http://votelinkr-ui.netlify.app",
      github: "https://github.com/mac-101"
    },
    { title: "ShopCart", category: "E-Commerce", description: "Modern retail experience with full cart logic and admin inventory tools.", tags: ["React", "API", "Redux"], link: "http://shopcart-demo.netlify.app", github: "https://github.com/mac-101", image: ecommerceImg },
  ];

  const navigate = useNavigate()
  const pathname = useLocation()

  const back = () => navigate("/")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section id="library" className="py-20 px-4 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header - Animated with Fade-Up */}
        <div className="mb-16 reveal" data-animation="fade-up">
          <div onClick={back} className="flex cursor-pointer items-center gap-2 mb-4">
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">Back</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Build <span className="text-slate-400 font-medium italic">Archive</span>
          </h2>
          <p className='pt-2'>{projects.length} Projects </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              // Added: reveal class, staggered delay, and rotate-up animation
              className="reveal group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              data-animation="rotate-up"
              data-delay={`${(index % 3) * 0.15}s`} // Staggers by column (0s, 0.15s, 0.3s)
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link}  target="_blank" rel="noopener noreferrer"  className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                      <Globe size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

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

        {/* Brand Footer - Animated with Zoom-In */}
        <div className="reveal mt-20 p-12 bg-slate-900 rounded-[3rem] text-center" data-animation="zoom-in">
          <h4 className="text-white text-2xl font-black uppercase mb-4 tracking-tighter">Ready to start something new?</h4>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">Open for collaborations on Healthcare, Fintech, and Real-time application systems.</p>
          <button
            onClick={() => window.open("https://wa.me/2349161489807", "_blank")}
            className="px-10 py-4 bg-blue-600 text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:text-slate-900 transition-all"
          >
            Drop a message
          </button>

        </div>
      </div>
    </section>
  )
}