import { testimonials } from "../constants";

function Testimonials() {
  return (
    <div className="w-full min-h-[100vh] pt-20 flex flex-col">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center">
        What are{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          people saying
        </span>{" "}
      </h1>

      <div className="cards flex items-center justify-center flex-grow">
        <div className="flex items-center justify-center flex-wrap gap-5 gap-y-8 px-20 py-8">
          {testimonials.map((elem, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 lg:max-w-96 bg-neutral-700 rounded-md p-4"
              >
                <div className="text min-h-32">
                    <h3>{elem.text}</h3>
                </div>
                <div className="details mt-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={elem.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{elem.user}</h4>
                    <p className="text-sm text-gray-400">{elem.company}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
