
import heroPng from "../../assets/HeroImg.JPG"
import Left from "./Left" 
import Cards from "./Achievement" 

const Hero = () => {
    return(
        <>
        <section id="home" className="text-white ">
            <div className="max-w-7xl mx-auto px-4 md:px-6 pt-25 xl:pt-18 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center"> 
                    
                    {/* Left Content */}
                    <Left />

                    {/* Right Content */}
                    <div className="flex justify-center"> 
                        <img src={heroPng} /> 
                    </div> 
                </div>
            </div>
            <Cards />
        </section>
        
        </>
    )
}

export default Hero