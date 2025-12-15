import React from 'react'
import { User, MapPin, Briefcase, Download, Code2, Database, Smartphone, CheckCircle } from 'lucide-react'
import pic from '../assets/pic-4.jpg'

export default function About() {
    const skills = [
        {
            icon: <Code2 className="w-5 h-5" />,
            name: "React.js",
            level: "Advanced"
        },
        {
            icon: <Code2 className="w-5 h-5" />,
            name: "JavaScript",
            level: "Advanced"
        },
        {
            icon: <Database className="w-5 h-5" />,
            name: "Firebase",
            level: "Advanced"
        },
        {
            icon: <Database className="w-5 h-5" />,
            name: "Firestore",
            level: "Advanced"
        },
        {
            icon: <Smartphone className="w-5 h-5" />,
            name: "Responsive Design",
            level: "Advanced"
        },
        {
            icon: <Code2 className="w-5 h-5" />,
            name: "Tailwind CSS",
            level: "Advanced"
        }
    ]
    //   const handleDownloadCV = () => {
    //     // Method 1: Open in new tab
    //     window.open(CV, '_blank')
        
    //     // OR Method 2: Force download
    //     // const link = document.createElement('a')
    //     // link.href = '/Charles_MacAnthony_CV.pdf'
    //     // link.download = 'Charles_MacAnthony_CV.pdf'
    //     // document.body.appendChild(link)
    //     // link.click()
    //     // document.body.removeChild(link)
    // }

    return (
        <section id="about" className="py-16 px-3 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <div className="relative">
                        <div className="mx-auto overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src={pic}
                                alt="Charles MacAnthony"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                                <User className="w-4 h-4" />
                                About Me
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Full Stack Developer <span className="text-blue-600">Specializing in React & Firebase</span>
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                I'm Charles MacAnthony, a passionate developer with 2+ years of experience building
                                modern web applications. I focus on creating clean, efficient solutions using React
                                for the frontend and Firebase for backend services.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700">Based in Abia, Nigeria</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700">2+ years professional experience</span>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {skills.map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center">
                                                {skill.icon}
                                            </div>
                                            <span className="font-medium text-gray-900">{skill.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-600">{skill.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                        <a 
                            href="/public/Charles_MacAnthony_CV.pdf.pdf"
                            download="Charles_MacAnthony_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    )
}