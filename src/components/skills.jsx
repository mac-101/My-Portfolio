import { Code2, Database, Smartphone, Globe, Layers, Layout, Terminal } from 'lucide-react';

export default function Skills() {
    const skills = [
        { icon: <Globe className="w-5 h-5" />, name: "HTML/CSS", per: 100 },
        { icon: <Code2 className="w-5 h-5" />, name: "React.js", per: 100 },
        { icon: <Terminal className="w-5 h-5" />, name: "JavaScript", per: 100 },
        { icon: <Layers className="w-5 h-5" />, name: "Next.JS", per: 50 },
        { icon: <Layout className="w-5 h-5" />, name: "Zustand", per: 90 },
        { icon: <Database className="w-5 h-5" />, name: "Firebase", per: 100 },
        { icon: <Smartphone className="w-5 h-5" />, name: "Responsive Design", per: 100 },
        { icon: <Code2 className="w-5 h-5" />, name: "Tailwind CSS", per: 100 }
    ];

    return (
        <section id='skills' className=" py-12 px-4">
            <div className="max-w-5xl mx-auto border-t border-gray-800 pt-10">
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="reveal group bg-gray-900/50 p-5 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-blue-500/10"
                            data-animation="pop-in"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <span className="font-semibold text-gray-200 text-sm tracking-wide uppercase">{skill.name}</span>
                            </div>

                            {/* Progress Track */}
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className="text-xs font-semibold inline-block text-blue-400 uppercase">
                                            Proficiency
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs font-semibold inline-block text-blue-400">
                                            {skill.per}%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-1.5 mb-2 text-xs flex rounded-full bg-gray-800">
                                    <div
                                        style={{ 
                                            width: `${skill.per}%`,
                                            transition: 'width 1.5s ease-in-out' 
                                        }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-600 to-blue-400 reveal" data-animation="fade-right" data-delay={`${index * 1}s`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}