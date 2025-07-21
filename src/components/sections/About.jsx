

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
            A passionate automotive enthusiast with knowledge of automotive mechanics and aesthetics and sharing them with the 
            automotive community
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
                    <h3 className="text-lg text-whitetext-center justitfy-center text-xl font-bold mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li >
                            Enrolled in Rutgers University Pursuing a B.S. in Computer Science
                        </li>
                        <li>
                            I am currently participating in the Rutgers University Car Club and I discuss with my peers about different events and drives around the area
                        </li>
                        <li>
                            Graduated with a High School Diploma from South Brunswick High School
                        </li>
                        <li>
                            Did a course related to auto mechanics
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-lg text-white text-center justify-center text-xl font-bold mb-4"> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                        <h4 className="font-bold text-lg text-white mt-4 mb-1">
                            Auto Mechanic Intern At My Local Mechanic Shop
                            </h4>
                        <       p className="text-gray-300">
                                Performed oil changes, replaced flat tires, worked with peers on big projects...
                                </p>
                            <h4 className="font-bold text-lg text-white mt-4 mb-1">
                                Freelance Photographer
                            </h4>
                            <p>
                                Went to car meets and created connections with people around me, took photos of their cars, and also did photoshoots for clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>
    )
}