import React from 'react'
import { ExternalLink, Github, ArrowUpRight, Sparkles, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthcore from '../assets/healthcoretech.netlify.app_.png'
import schoolSite from '../assets/school (1).png'
import fastfood from '../assets/tastybitefastfood.netlify.app_.png'
import voting from '../assets/school (4).png'

export default function Projects() {
  const projects = [
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
    <section id="projects" className="py-16 px-2 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 reveal" data-animation="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing React and Firebase applications
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-200 group reveal"
              data-animation="zoom-in"
              data-delay={`${index * 0.1}s`}
            >
              <div className="h-48 relative overflow-hidden bg-gray-100">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-gray-400" />
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.liveLink} target='_blank' rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.codeLink} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-md tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline font-semibold flex items-center gap-1">
                    Demo <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 pt-8 border-t border-gray-200 reveal" data-animation="pop-in">
        <p className="text-gray-600 mb-6">Interested in more projects and collaborations?</p>
        <Link to="/projects" className="inline-block">
          <span className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-medium active:scale-95 cursor-pointer shadow-lg">
            See More
          </span>
        </Link>
      </div>
    </section>
  )
}