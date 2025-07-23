import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="font-mono text-xl font-bold text-white">arav.shots</Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/projects" className="text-white">Projects</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};
