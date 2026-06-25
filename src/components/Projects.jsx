import { ExternalLink } from "lucide-react" 
import React_project from "../assets/ReactLandingPageProject.JPG"
import Project_Udbodhan from "../assets/Udhbodhan_project.JPG"
import Project_brandshark from "../assets/Project_brandshark.JPG"

const project_arr = [
    {
        id:1,
        p_image:React_project,
        p_title:"React Landing Page",
        p_description:"Developed a responsive single-page landing website using React.js and Tailwind CSS, focusing on modern UI design, component-based architecture, and mobile-first responsiveness. Implemented reusable React components, clean layouts, and optimized styling to deliver a seamless user experience across devices.",
        p_tags:[
            "React",
            "Tailwind CSS"
        ],
        p_link:"https://lbhartii24g.github.io/React_Tailwind/"
    },
    {
        id:2,
        p_image:Project_Udbodhan,
        p_title:"Udbodhan - WooCommerce Store",
        p_description:"Created a WooCommerce-based WordPress website with responsive page layouts, product management functionality, checkout workflows, and performance optimizations to deliver a seamless shopping experience across devices",
        p_tags:[
            "WordPress",
            "WooCommerce"
        ],
        p_link:"https://udbodhan.org/"
    },
    {
        id:3,
        p_image:Project_brandshark,
        p_title:"Brandshark - WordPress Theme",
        p_description:"Developed and maintained the company's WordPress website for a digital marketing agency. Built responsive page layouts, customized templates, Executed SEO-friendly structures, and fixed website performance to enhance user experience across all devices.",
        p_tags:[
            "WordPress",
            "ACF"
        ],
        p_link:"https://brandshark.com/"
    }
]
const Projects = () => {
    return(
        <section id="projects" className="py-24 px-6 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center">
                    <p className="text-white font-medium mb-4 border inline-block rounded-full   px-3 py-2 mb-3">Featured Projects</p> 
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center mb-15">Some of My Recent Work</h2>
                </div> 

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {project_arr.map(function(data){
                        return <div key={data.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 transition">
                            <img src={data.p_image} alt={data.p_title} className="w-full h-56 object-cover object-top-left"/>
                            <div className="p-6"> 
                                <h3 className="text-2xl font-semibold mb-3">{data.p_title} </h3>
                                {/* project description */}
                                <p className="text-slate-400 mb-5 text-base md:text-lg">{data.p_description}</p>
                                <div className="flex gap-3 flex-wrap mb-6">
                                    {data.p_tags.map(function(tag){
                                        return <span className="bg-slate-800 px-3 py-2 rounded-lg text-sm">{tag}</span> 
                                    })}
                                    
                                </div> 
                                <div className="flex justify-end gap-4">
                                    <a href={data.p_link} target="_blank" rel="noreferrer" ><ExternalLink size={24} /></a> 
                                </div>
                            </div>
                        </div>
                    })}  
                </div>
            </div>
        </section>
    )
}

export default Projects