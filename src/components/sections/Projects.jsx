import Porsche from "../../assets/Porsche.jpeg"
import f1 from "../../assets/f1.jpeg"
import BMWDuo from "../../assets/BmwDuo.jpeg"
import Porsch3 from "../../assets/Porsch3.jpeg"
import BMW from "../../assets/Bmw.jpeg"
import PorscheST from "../../assets/PorscheST.jpeg"



export const Projects = () => {
    return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 

    <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center "> Some Photos That I Have Taken...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src = {Porsche} alt = "Porsche 911 GT3 RS"></img>
                <img src = {f1} alt = "Mercedes F1 Racecar"></img>
                <img src = {BMWDuo} alt = "BMW M4 and BMW M3"></img>
                <img src = {Porsch3} alt = "Porsche 911 GT3 RS"></img>
                <img src = {BMW} alt = "BMW M4"></img>
                <img src = {PorscheST} at = "Porsche 911 S/T"></img>
            </div>
    </div>

    </section>
    )
}