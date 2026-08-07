import {
    Code2,
    Database,
    Smartphone,
    Globe,
    Layers,
    Layout,
    Terminal,
    Server,
    Braces,
} from "lucide-react";

export default function Skills() {
    const skills = [
        { icon: <Code2 size={18} />, name: "HTML / CSS", per: 90 },
        { icon: <Braces size={18} />, name: "JavaScript", per: 85 },
        { icon: <Code2 size={18} />, name: "React.js", per: 85 },
        { icon: <Layers size={18} />, name: "Next.js", per: 50 },
        { icon: <Layout size={18} />, name: "Tailwind CSS", per: 90 },
        { icon: <Smartphone size={18} />, name: "Responsive Design", per: 90 },
        { icon: <Layers size={18} />, name: "Zustand", per: 75 },
        { icon: <Globe size={18} />, name: "Firebase", per: 80 },
        { icon: <Terminal size={18} />, name: "Python", per: 70 },
        { icon: <Server size={18} />, name: "Django", per: 65 },
        { icon: <Database size={18} />, name: "PostgreSQL", per: 65 },
    ];

    return (
        <section id="skills" className="py-12 px-4">
            <div className="max-w-5xl mx-auto border-t border-gray-800 pt-8">

                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                    <div>
                        <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">
                            My Stack
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                            Technical Skills
                        </h3>
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="
                                reveal group
                                p-3.5
                                rounded-xl
                                bg-gray-900/50
                                border border-gray-800
                                hover:border-blue-500/40
                                hover:bg-gray-900
                                transition-all duration-300
                            "
                            data-animation="pop-in"
                        >
                            {/* Name + Icon */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                                        {skill.icon}
                                    </div>

                                    <span className="text-xs font-semibold text-gray-200">
                                        {skill.name}
                                    </span>
                                </div>

                                <span className="text-[10px] text-blue-400 font-semibold">
                                    {skill.per}%
                                </span>
                            </div>

                            {/* Progress */}
                            <div className="h-1 w-full rounded-full bg-gray-800 overflow-hidden">
                                <div
                                    style={{
                                        width: `${skill.per}%`,
                                        transition: "width 1.2s ease-in-out",
                                    }}
                                    className="
                                        h-full
                                        rounded-full
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-cyan-400
                                        reveal
                                    "
                                    data-animation="fade-right"
                                    data-delay={`${index * 0.1}s`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

