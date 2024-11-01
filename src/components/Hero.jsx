import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="hero w-full min-h-[110vh] px-4">
      <div className="container flex flex-col gap-12 items-center pt-16">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center">
          VirtualR builds tools <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">for developers</span>
        </h1>

        <h5 className="max-w-4xl text-lg text-neutral-500 text-center">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality</h5>

        <div className="buttons flex items-center gap-5">
        <a
            href="#"
            className="p-3 rounded-md border-2 border-transparent bg-gradient-to-r from-orange-500 to-orange-800"
          >
            Start for free
          </a>
        <a href="#" className="p-3 border-2 border-white rounded-md">
            Documentation
          </a>
        </div>

        <div className="videos flex flex-col sm:flex-row items-center gap-10">
            <video className="w-full sm:w-100 h-80 overflow-hidden rounded-md border-2 border-orange-500 object-cover"  loop autoPlay muted src={video1}></video>
            <video className="w-full sm:w-100 h-80 overflow-hidden rounded-md border-2 border-orange-500 object-cover"  loop autoPlay muted src={video2}></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
