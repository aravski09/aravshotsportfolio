import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-right">
          Hi, my name is Arav Agarwal
        </h1>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          I am a part-time automotive photographer who loves cars, be it working on them to creating photos of them. 
          This website contains my photos that I have taken over my career and my ultimate goal is to acquire my dream car garage
          and become more involved within the automotive community!
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Photos
          </Link>
          <Link
            to="/contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me!
          </Link>
        </div>
      </div>
    </section>
  );
};