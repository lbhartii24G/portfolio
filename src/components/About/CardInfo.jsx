import { User, Award, Code2, Mail, MapPin, CalendarDays, Briefcase}  from "lucide-react"

const info_arr = [
    {
        id:1,
        icon: User,
        label: "Name",
        labelTxt: "Laxmi Bharti"
    },
    {
        id:2,
        icon: Mail,
        label: "Email",
        labelTxt: "lbhartii24@gmail.com"
    },
    {
        id:3,
        icon: MapPin,
        label: "Location",
        labelTxt: "India"
    },
    {
        id:4,
        icon: CalendarDays,
        label: "Experience",
        labelTxt: "5+ years"
    },
    {
        id:5,
        icon: Briefcase,
        label: "Freelance",
        labelTxt: "Available"
    }
]

const CardInfo = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-1">
            {info_arr.map(function(data){
                const Icon = data.icon
                return <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center">
                        <Icon className="text-blue-500" size={24} />
                    </div> 
                    <div>
                        <p className="text-slate-400 text-sm">{data.label}</p>
                        <h3 className="text-white text-xl font-medium">{data.labelTxt}</h3>
                    </div>
                </div>
            })}  
        </div>
    )
}

export default CardInfo