import React from 'react'
import { ExternalLink, Github, Sparkles, Eye, CheckCircle, Target, Users, BarChart, Zap, Shield, Database, ArrowUpRight } from 'lucide-react'

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
      image: ecommerceImg,
      liveLink: "http://shopcart-demo.netlify.app",
      codeLink: "#"
    },
    {
      title: "VoteLinkr",
      description: "Real-time voting application for contests and competitions",
      tags: ["Firestore", "Tailwind", "Firebase Auth", "React", "Context API"],
      image: voting,
      liveLink: "http://votelinkr-ui.netlify.app",
      codeLink: "#"
    },
    {
      title: "School Management System",
      description: "A school online presence and management platform",
      tags: ["Html", "API", "CSS", "JavaScript"],
      image: schoolSite,
      liveLink: "http://cleverschool.netlify.app",
      codeLink: "#"
    },
  ]

  const smartBizFeatures = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Problem Solved",
      description: "Small businesses struggle with managing multiple disconnected tools for inventory, sales, and analytics"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Solution",
      description: "All-in-one platform that consolidates business operations into a single, intuitive interface"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Why It Exists",
      description: "To empower small business owners with enterprise-level tools at an affordable price"
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Key Features",
      description: "Real-time analytics, inventory management, sales tracking, customer management"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance",
      description: "Lightning-fast response times with optimized React components and efficient data handling"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security",
      description: "Enterprise-grade security with Firebase Authentication and secure data handling"
    }
  ]

  return (
    <section id="projects" className="py-16 px-2 bg-gray-50">
      <div className="max-w-7xl mx-auto">
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

        {/* SmartBiz OS Featured Section - ENTIRE WIDTH */}
        <div className="mb-20 bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Project Header */}
          <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-3">
                  <Sparkles className="w-4 h-4" />
                  Flagship Project
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">SmartBiz OS</h3>
                <p className="text-gray-700 text-lg max-w-3xl">
                  Comprehensive business management platform for small and medium enterprises - 
                  Consolidating all business operations into one powerful, intuitive dashboard
                </p>
              </div>
              <a 
                href="http://smartbizos.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
              >
                <ExternalLink className="w-5 h-5" />
                Live Application
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:flex">
            {/* LEFT SIDE - GIANT IMAGE */}
            <div className="md:w-2/3">
              <div className="p-0">
                {/* Large Project Image with Shadow */}
                <div className="relative overflow-hidden bg-gray-900">
                  <img 
                    src={business}
                    alt="SmartBiz OS Dashboard"
                    className="w-full h-auto max-h-[600px] object-contain transform hover:scale-101 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Interactive Controls */}
                  <div className="absolute bottom-6 right-6 flex gap-3">
                    <button 
                      onClick={() => window.open('http://smartbizos.netlify.app', '_blank')}
                      className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg hover:bg-white transition-all hover:scale-105 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      Explore Dashboard
                    </button>
                  </div>
                </div>

                {/* Tech Stack Below Image */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Built With
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["React.js", "Firebase", "Firestore", "Recharts", "Tailwind CSS", "Context API", "React Router", "Chart.js"].map((tech) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-white border border-blue-100 text-blue-700 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Technical Excellence
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Real-time data sync with Firebase Firestore</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Interactive dashboards with Recharts visualization</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Role-based authentication & access control</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Optimized performance with React optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span>Fully responsive across all devices</span>
                  </li>
                </ul>
                
                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-700">95%</div>
                      <div className="text-xs text-gray-600">Performance</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-700">100%</div>
                      <div className="text-xs text-gray-600">Responsive</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-700">99.9%</div>
                      <div className="text-xs text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* RIGHT SIDE - Detailed Features */}
            <div className="md:w-1/3 px-2 md:px-4 py-8 border-l border-gray-200 bg-gradient-to-b from-white to-gray-50">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  Project Impact
                </h3>
                <p className="text-gray-700 mb-6">
                  SmartBiz OS revolutionizes how small businesses operate by providing an all-in-one 
                  solution that eliminates the need for multiple subscriptions and fragmented data.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="space-y-6">
                {smartBizFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all bg-white"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Highlights */}
              
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
            Other Notable Projects
          </h3>
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
                        target='_blank'
                        rel="noopener noreferrer"
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
                      target="_blank"
                      rel="noopener noreferrer"
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
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">Interested in more projects and collaborations?</p>
          <a 
            href="https://github.com/mac-101" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            Explore GitHub Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}