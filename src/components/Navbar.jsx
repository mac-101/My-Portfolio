import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.clientHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Floating Navbar Container */}
      <div className={`w-full px-4 md:px-6 z-50 flex justify-center fixed top-4 transition-all duration-300 ${
        isScrolled ? 'scale-95' : ''
      }`}>
        <nav className={`flex w-full max-w-4xl justify-between items-center py-3 px-6 rounded-full shadow-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200/30' 
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}>
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className={`w-10 h-10 flex items-center justify-center text-lg font-serif rounded-full font-bold transition-all duration-300 ${
              isScrolled 
                ? 'bg-blue-600 text-white' 
                : 'bg-white/20 text-white backdrop-blur-sm'
            } group-hover:scale-110 group-hover:rotate-12`}>
              M
            </div>
            <h1 className={`font-bold text-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              C<span className="text-blue-500">MC</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex font-medium gap-6 lg:gap-8 items-center">
            {navItems.slice(0, -1).map((item) => (
              <li 
                key={item.id}
                className={`relative cursor-pointer transition-all duration-300 py-2 px-1 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                } ${activeSection === item.id ? (isScrolled ? 'text-blue-600' : 'text-white') : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${
                    isScrolled ? 'bg-blue-500' : 'bg-white'
                  } animate-pulse`}></span>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <button 
            onClick={() => scrollToSection("contact")}
            className={`hidden md:block font-medium py-2.5 px-6 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' 
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:scale-105'
            }`}
          >
            Contact Me
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-gray-700' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0  z-40 md:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div className={`absolute top-20 right-4 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200/30 transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li 
                key={item.id}
                className={`py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
          
          <button 
            onClick={() => scrollToSection("contact")}
            className="w-full mt-6 font-medium py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{
            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>
    </>
  )
}