import { FaGithub, FaLinkedin } from 'react-icons/fa' 
import { Mail } from 'lucide-react'

const Social = () => {
  return ( 
    <div className="mt-8 flex items-center">
        <p className="text-slate-400 mr-10">Follow me on</p> 
        <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/laxmi-bharti-wordpressdeveloper/" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
                <FaLinkedin size={20} /> </a>

            <a href="https://github.com/lbhartii24G" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
                <FaGithub  size={20} /> </a>

            <a href="mailto:lbhartii24@gmail.com"
            className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
            >
                <Mail size={20} /> </a>
        </div>
    </div>
  )
}

export default Social