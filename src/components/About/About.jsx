import { User, Award, Code2, Mail, MapPin, CalendarDays, Briefcase, Download}  from "lucide-react"
import CardInfo from "./CardInfo" 
import heroPng from "../../assets/HeroImage.JPG"

const About = () => {
    return(
        <section id="about" className="pt-20 pb-0 lg:py-24 px-6 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto w-full lg:grid lg:grid-cols-6 lg:gap-4"> 
                <div className="col-span-4">
                    <p className="text-white font-normal mb-4 border inline-block rounded-full px-3 py-2 mb-3 text-sm md:text-base">About Me</p>
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4"><span className="text-[#2563eb]">WordPress</span> Developer &<br></br>
                        Frontend Enthusiat</h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-full lg:max-w-2xl mb-4">I am a Full Stack WordPress Developer with over 5 years of experience building custom WordPress websites, WooCommerce stores, landing pages, and scalable web solutions.</p>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-full lg:max-w-2xl mb-4">My expertise includes WordPress, Elementor, Divi, Gutenberg, WooCommerce, PHP, JavaScript, React.js, and Tailwind CSS. I focus on creating fast, responsive, SEO-friendly websites that deliver exceptional user experiences.</p>
                    <a href="/portfolio/Laxmi_Bharti_Resume.pdf" target="_blank" rel="noreferrer" className="border border-white hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition inline-block ">
                        <Download className="text-[#2563eb] inline-block items-start leading-none mr-2 mt-[-3px]" size={18}  /> Download Resume 
                    </a>
                </div>
                <div className="col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 mt-10 lg:mt-0 backdrop-blur-sm"> 
                    <CardInfo /> 
                </div>
            </div>
        </section>
    )
}

export default About