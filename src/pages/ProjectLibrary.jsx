import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import CallToAction from '../components/CallToAction'

export default function ProjectLibrary() {
  const navigate = useNavigate()
  const pathname = useLocation()

  const goBack = () => navigate('/')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section id="library" className="py-20 px-4 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal" data-animation="fade-up">
          <button
            onClick={goBack}
            className="flex cursor-pointer items-center gap-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              Back
            </span>
          </button>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">
            Build <span className="text-slate-400 font-medium italic">Archive</span>
          </h2>
          <p className="pt-2">{projects.length} Projects</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={(index % 3) * 0.15}
            />
          ))}
        </div>

        <CallToAction />
      </div>
    </section>
  )
}
