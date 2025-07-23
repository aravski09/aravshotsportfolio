
export const About = () => {

    const editingSoftware = ["PhotoShop", "Adobe Lightroom", "CapCut", "DaVinci Software"]
    const Gear = ["Canon Rebel T3I", "DJI Osmo Pocket 3", "CPL Filter"]
    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
 
    <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center ">
        About Me
        </h2>
        <div className="text-center justify-center glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                I'm a passionate automotive enthusiast with a strong understanding of both mechanical systems and visual design. I enjoy sharing my knowledge and experiences with the automotive community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Editing Software
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {editingSoftware.map((tech,key) => (
                               <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue--500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition">

                                    {tech}
                               </span>

                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Gear I Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {Gear.map((tech,key) => (
                               <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue--500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2) transition">

                                    {tech}
                               </span>

                        ))}
                    </div>
                </div>
            </div>
        </div>
            <div className="grid grid-cols-1 grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl text-white text-center font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            Currently pursuing a B.S. in Computer Science at Rutgers University
                        </li>
                        <li>
                            Active member of the Rutgers University Car Club, where I engage with peers about events, drives, and automotive trends
                        </li>
                        <li>
                            Graduated from South Brunswick High School with a High School Diploma
                        </li>
                        <li>
                            Completed a course in automotive mechanics
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl text-white text-center font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-bold text-lg text-white mt-4 mb-1">
                                Auto Mechanic Intern – Local Repair Shop
                            </h4>
                            <p className="text-gray-300">
                                Performed oil changes, repaired flat tires, and collaborated with peers on larger repair projects.
                            </p>
                            <h4 className="font-bold text-lg text-white mt-4 mb-1">
                                Freelance Photographer
                            </h4>
                            <p>
                                Attended car meets to build connections and photograph unique builds. Also conducted professional photoshoots for clients and their vehicles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    )
}