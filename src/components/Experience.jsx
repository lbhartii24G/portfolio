const Experience = () => {
    return(
        <section className="pt-20 pb-0 lg:py-24  px-6 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto relative"> 
                <div className="text-center">
                    <p className="text-white font-medium mb-4 border inline-block rounded-full   px-3 py-2 mb-3">Experience</p> 
                    <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center mb-15">My Professional Journey</h2>
                </div>   
                <div className="grid lg:grid-cols-2 ">

                    {/* Item 1 */}
                    <div className="relative pt-10 lg:pl-[10%] mb-10 lg:mb-0">
                        {/* line*/}
                        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[1px] bg-slate-700"></div> 
                        {/* dot */}
                        <div className="absolute -top-4 lg:left-[40%] -translate-x-1/2 w-8 h-8  rounded-full bg-blue-600 border-4 border-slate-950"></div>
                        <p className="text-slate-400 mb-2">2022 - 2025</p>
                        <h3 className="text-[25px] font-bold mb-2">Senior WordPress Developer</h3> 
                        <p className="text-white text-[20px] font-[500] mb-4">Brandshark</p> 
                        <ul className="space-y-2 text-slate-500 text-base md:text-lg leading-relaxed list-disc pl-4">
                            <li>Optimized WooCommerce sites, boosting e-commerce sales by 30% through custom plugin development.</li>
                            <li>Integrated third-party APIs, enhancing website functionality and user experience for 15+ clients.</li>
                            <li>Led migration of over 10+ WordPress sites to WooCommerce platforms, improving performance.</li>
                            <li>Conducted training sessions increasing junior developer efficiency by 20% in project delivery.</li>
                            <li>Customized WooCommerce checkout process, increasing conversion rates by 30% for multiple clients.</li>
                        </ul> 
                    </div>

                    {/* Item 2 */}
                    <div className="relative pt-10 lg:pl-[30%]">
                        {/* line*/}
                        <div className="absolute top-0 left-0 w-full lg:w-[51%] h-[1px] bg-slate-700"></div>
                        {/* dot */}
                        <div className="absolute -top-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-950"></div>
                        <p className="text-slate-400 mb-2">2020 - 2022</p>
                        <h3 className="text-[25px] font-bold mb-2">Junior WordPress Developer</h3> 
                        <p className="text-white text-[20px] font-[500] mb-4">Brandshark</p> 
                        <ul className="space-y-2 text-slate-500 text-base md:text-lg leading-relaxed list-disc pl-4">
                            <li>Boosted development efficiency by 30% by reducing build time from 10 to 7 hours through automated API integration workflows.</li>
                            <li>Resolved high-priority WordPress performance issues, reducing load times by 20%</li>
                            <li>Built scalable post types and taxonomies, expanding website functionality by 30%</li>
                        </ul> 
                    </div> 
                </div> 
            </div>
        </section>
    )
}

export default Experience