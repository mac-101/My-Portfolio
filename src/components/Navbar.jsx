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
    { id: "socials", label: "Socials" },
    { id: "contact", label: "Contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
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
      <div className={`w-full p-2 md:p-1 z-50 flex justify-center items-center fixed top-0 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : ''
      }`}>
        <nav className={`flex w-full max-w-6xl justify-between items-center py-3 px-4 md:py-4 md:px-8 rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-blue-900/90 backdrop-blur-sm shadow-xl' 
            : 'bg-blue-800'
        }`}>
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="py-2 px-3 flex items-center justify-center text-black bg-yellow-400 text-lg font-serif rounded-full font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              M
            </div>
            <h1 className="font-bold text-xl md:text-2xl text-white">
              C<span className="text-yellow-400">MC</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex font-medium text-white gap-6 lg:gap-10 items-center">
            {navItems.slice(0, -1).map((item) => (
              <li 
                key={item.id}
                className={`relative cursor-pointer transition-all duration-300 hover:text-yellow-400 py-2 px-1 ${
                  activeSection === item.id ? 'text-yellow-400' : ''
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded-full animate-pulse"></span>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <button 
            onClick={() => scrollToSection("contact")}
            className="hidden md:block font-medium py-2 px-6 bg-white text-blue-800 rounded-2xl hover:bg-yellow-400 hover:text-blue-900 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-20 right-4 w-64 bg-blue-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li 
                key={item.id}
                className={`py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-blue-700 text-yellow-400' 
                    : 'text-white hover:bg-blue-800 hover:text-yellow-300'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="flex items-center gap-3">
                  {item.id === 'contact' && (
                    <span className="text-sm bg-yellow-400 text-blue-900 px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          
          {/* Mobile Contact Button */}
          <button 
            onClick={() => scrollToSection("contact")}
            className="w-full mt-6 font-medium py-3 bg-white text-blue-800 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-yellow-400 transition-all duration-300"
          style={{
            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        />
      </div>
    </>
  )
}