
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
     <nav className="fixed top-0 left-0 w-full bg-slate-950 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Laxmi<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300 [&>li]:font-normal">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Desktop Resume */}
        <a href="/Laxmi_Bharti_Resume.pdf" target="_blank" rel="noreferrer" className="hidden md:block bg-blue-600 px-5 py-2 rounded-lg text-white" >Resume </a>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <ul className="flex flex-col p-5 gap-4 text-slate-300">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

            <li>
              <a
                href="/Laxmi_Bharti_Resume.pdf" target="_blank" rel="noreferrer" 
                className="inline-block bg-blue-600 px-4 py-2 rounded-lg text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar