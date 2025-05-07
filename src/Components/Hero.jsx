import HeroBackground from "./HeroBackground";
import Logo1 from "../assets/images/Logo1.png";


export default function Hero() {
  return (
    <div className="relative text-white pt-32 pb-20 px-4">
     
      <HeroBackground />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          We Shape Your Ideas Into <br />
          <span className="text-white">Awesome Digital</span> <br />
          <span className="text-white">Experience</span>
        </h1>
        <p className="mt-6 text-gray-300">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>
        <button className="mt-8 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full hover:bg-cyan-400 transition">
          Book a call with us
        </button>

        {/* Logos */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-80">
          <img
            src={Logo1}
            alt="Logo1"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
