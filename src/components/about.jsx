import React from 'react'
import { User, MapPin, Briefcase, Download } from 'lucide-react'

import pic from '../assets/pic-4.jpg';

export default function About() {
    return (
        <section id="about" className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <div className="relative">
                        <div className=" mx-auto overflow-hidden rounded-2xl shadow-lg">
                            {/* Your image goes here */}
                            <img
                                src={pic}
                                alt="Charles MacAnthony"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
                    </div>

                    {/* Content Section */}
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
                                <span className="text-gray-700">Based in Lagos, Nigeria</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-5 h-5 text-blue-600" />
                                <span className="text-gray-700">2+ years professional experience</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Download className="w-5 h-5" />
                                Download Resume
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}