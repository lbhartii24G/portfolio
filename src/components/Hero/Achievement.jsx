import { BriefcaseBusiness, Rocket, Code2, Target } from "lucide-react"
import CountUpModule  from "react-countup"
const CountUp = CountUpModule.default

const Cards_arr = [
  {
    id:1,
    icon: BriefcaseBusiness,
    number:5,
    start:1,
    sign: "+",
    label: "Years Experience"
  },
  {
    id:2,
    icon: Rocket,
    number:50,
    start:42,
    sign: "+",
    label: "Websites Built"
  },
  {
    id:3,
    icon: Code2,
    number:75,
    start:65,
    sign: "+",
    label: "Projects Completed"
  },
  {
    id:4,
    icon: Target,
    number:100,
    start:85,
    sign: "%",
    label: "Client Satisfaction"
  }
]
const Cards = () => {
  return (
     <div className="max-w-7xl mx-auto w-full px-4 pt-5 pb-5 xl:pt-0 xl:pb-0 md:px-6">
        <div className="bg-slate-950/70 border border-slate-800 rounded-3xl backdrop-blur-sm"> 
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"> 
            {Cards_arr.map(function(data){
              const Icon = data.icon 
              return <div key={data.id} className="md:flex items-center gap-4 p-4 md:p-8 [:nth-child(-n+2)]:border-b lg:border-b-0 odd:border-r lg:border-r last:border-r-0 border-slate-800 ">
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Icon size={28} />
                </div> 
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white pt-3 md:pt-0"> 
                      <CountUp start={data.start} end={data.number}  />{data.sign}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-base">{data.label}</p>
                </div>
              </div>
            })} 
          </div> 
        </div>
      </div>
  )
}

export default Cards