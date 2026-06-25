import { MoveRight, Download, Mail } from 'lucide-react' 
import Social from "./Socials"  


const Left = () => {
  return (
     <div>
        <p className="text-white font-normal mb-4 border inline-block rounded-full px-3 py-2 mb-3 text-sm md:text-base">👋 Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3">Laxmi Bharti</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-4">Full Stack WordPress Developer</h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-4">Experienced WordPress Developer with 5+ years of expertise in custom theme development, WooCommerce, Elementor, Gutenberg, React.js, Tailwind CSS, PHP, and website optimization.</p>

        <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 font-normal rounded-lg font-medium transition text-sm md:text-base">
                View Projects <MoveRight className="inline-block pl-1" />
            </a>
            <a href="/Laxmi_Bharti_Resume.pdf" download target="_blank" rel="noreferrer" className="border text-sm md:text-base font-normal border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition">
                Download Resume <Download className="inline-block pl-1"  />
            </a>
        </div>

        {/* Social media */} 
        <Social />
    </div>
  )
}

export default Left