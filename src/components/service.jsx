import React from 'react'
import { Code2, Database, Smartphone, Zap } from 'lucide-react'

export default function Services() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Building modern interfaces with React, Next.js, and Tailwind CSS",
      tech: ["React", "Next.js", "Tailwind", "TypeScript"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Firebase Backend",
      description: "Full Firebase stack including Auth, Firestore, and Cloud Functions",
      tech: ["Firestore", "Auth", "Storage", "Functions"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first, fully responsive websites that work on all devices",
      tech: ["Mobile-First", "PWA", "Cross-Browser", "Performance"]
    }
  ]

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            My Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What I <span className="text-blue-600">Specialize In</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Full stack development with focus on React frontend and Firebase backend
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brief Summary */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
          <p className="text-gray-800">
            <span className="font-bold">2+ years</span> experience delivering complete web solutions 
            with <span className="text-blue-600 font-medium">React frontend</span> + 
            <span className="text-orange-600 font-medium"> Firebase backend</span>
          </p>
        </div>
      </div>
    </section>
  )
}