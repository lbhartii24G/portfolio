import { Globe, Code2, Database, Wrench } from "lucide-react"

const skills_arr = [
  {
    id:1,
    icon: Globe,
    title:"Frontend",
    tagList: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS"
    ]
  },
  {
    id:2,
    icon: Code2,
    title:"WordPress",
    tagList: [
      "Custom Themes",
      "WooCommerce",
      "Elementor",
      "Divi Builder",
      "ACF"
    ]
  },
  {
    id:3,
    icon: Database,
    title:"Backend",
    tagList: [
      "PHP",
      "MySQL",
      "REST API",
      "AJAX",
      "JSON"
    ]
  },
  {
    id:4,
    icon: Wrench,
    title:"Tools",
    tagList: [  
      "Github",
      "VS Code",
      "Figma" 
    ]
  }
]

const Skills = () => {
    return(
      <section id="skills" className="pt-20 pb-0 lg:py-24 px-6 bg-slate-950 text-white" >
        <div className="max-w-7xl mx-auto">  
        <div className="text-center mb-16">
          <p className="text-white font-medium mb-4 border inline-block rounded-full px-3 py-2 mb-3">My Expertise</p> 
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">Skills & Technologies  </h2> 
        </div> 
         
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">  
          {skills_arr.map(function(data){
            const Icon = data.icon
            return <div key={data.id} className="bg-slate-900 border border-slate-800 rounded-3xl px-4 py-6 md:px-6 md:py-8 hover:border-blue-500 transition">
              <Icon className="text-blue-500 mb-5" size={40}/>
              <h3 className="text-2xl font-semibold mb-5">{data.title}</h3>
              <ul className="space-y-3 text-slate-400 text-sm md:text-base list-disc pl-4">
                {data.tagList.map(function(tag){
                  return <li>{tag}</li>
                })} 
              </ul>
            </div>
          })} 
        </div>
      </div>
    </section>
    )
}

export default Skills