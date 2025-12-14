import React from 'react'
import { ExternalLink, Github, Sparkles, Eye } from 'lucide-react'

// Import your project images
import ecommerceImg from '../assets/school (2).png'
import schoolSite from '../assets/school (1).png'
import voting from '../assets/school (4).png'
import business from '../assets/school (3).png'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, checkout, and admin dashboard",
      tags: ["React", "Firebase", "Rest Api", "Tailwind"],
      image: ecommerceImg, // Your imported image
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "VoteLinkr",
      description: "Real-time voting application for contests and competitions",
      tags: ["Firestore", "Tailwind", "Firebase Auth", "React", "Context API"],
      image: voting, // Your imported image
      liveLink: "votelinkr-ui.netlify.app",
      codeLink: "#"
    },
    {
      title: "SartBiz OS",
      description: "All-in-one business management system for small businesses",
      tags: ["React", "Rechart", "Tailwind CSS"],
      image: business, // Your imported image
      liveLink: "smartbizos.netlify.app",
      codeLink: "#"
    },
    {
      title: "School Management System",
      description: "A school online presence and management platform",
      tags: ["Html", "API", "CSS", "JavaScript"],
      image: schoolSite, // Your imported image
      liveLink: "cleverschool.netlify.app",
      codeLink: "#"
    },
   
  ]

  return (
    <section id="projects" className="py-16 px-2 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                {project.image ? (
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a 
                      href={project.codeLink}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                      title="View Code"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-700 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/mac-101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}