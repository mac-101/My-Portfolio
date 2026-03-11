import React from 'react'
import { ExternalLink, Github, ArrowUpRight, Sparkles, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthcore from '../assets/healthcoretech.png'
import schoolSite from '../assets/school (1).png'
import fastfood from '../assets/tastybitefastfood.png'
import business from '../assets/school (3).png'

export default function Projects() {
  const projects = [
    {
      title: "SmartBiz Inventory",
      description: "A robust SaaS platform for small businesses featuring real-time inventory tracking, bulk purchase calculators, and automated sales reporting.",
      tags: ["React", "Zustand", "Firebase", "Tailwind"],
      image: business,
      liveLink: "http://smartbiz-os.netlify.app",
      codeLink: "#",
      isFeatured: true 
    },
    {
      title: "HealthCore Tech",
      description: "Full-featured online healthcare platform with appointment scheduling and patient management",
      tags: ["React", "Firebase", "Rest Api", "Tailwind"],
      image: healthcore,
      liveLink: "http://healthcoretech.netlify.app",
      codeLink: "#"
    },
    {
      title: "TastyBite Fast Food",
      description: "Modern fast food delivery platform with menu management and order tracking",
      tags: ["Html", "CSS", "JavaScript", "Tailwind"],
      image: fastfood,
      liveLink: "http://tastybitefastfood.netlify.app",
      codeLink: "#"
    },
    {
      title: "Clever School",
      description: "A school online presence and management platform",
      tags: ["Html", "API", "CSS", "JavaScript"],
      image: schoolSite,
      liveLink: "http://cleverschool.netlify.app",
      codeLink: "#"
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Kept your Sparkles style */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing React, SaaS architecture, and Firebase applications
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200 group flex flex-col ${project.isFeatured ? 'md:col-span-2 lg:flex-row' : ''}`}
            >
              {/* Image Area with Overlay Logic */}
              <div className={`relative overflow-hidden bg-gray-100 ${project.isFeatured ? 'lg:w-1/2 h-64 lg:h-auto' : 'h-48'}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Eye className="w-12 h-12 text-gray-400" />
                  </div>
                )}

                {/* Overlay Links from previous version */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.liveLink} target='_blank' rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-gray-900">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.codeLink} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors text-gray-900">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  {project.isFeatured && <span className="text-[10px] bg-blue-600 text-white px-2 py-1 rounded font-black uppercase tracking-tighter">Latest</span>}
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-md tracking-wider border border-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline font-semibold flex items-center gap-1">
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-6 font-medium">Interested in more projects and collaborations?</p>
        <Link to="/projects" className="inline-block">
          <span className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium active:scale-95 cursor-pointer shadow-lg">
            See More Projects
          </span>
        </Link>
      </div>
    </section>
  )
}