import { features } from "../constants";

const Features = () => {
  return (
    <div className="container w-full min-h-[90vh] flex flex-col items-center py-5">
      <h5 className="w-fit bg-neutral-900 px-4 py-2 rounded-lg text-orange-500">
        FEATURE
      </h5>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20">
        Easily build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          your code
        </span>{" "}
      </h1>

      <div className="cards flex gap-10 items-start justify-center flex-wrap mt-10 px-24 gap-y-20">
  {features.map((elem, index) => {
    return (
      <div key={index} className="max-w-80 sm:w-1/2 lg:w-1/3 flex gap-3">
        <div className="left text-orange-600">{elem.icon}</div>
        <div className="right flex flex-col gap-5">
          <h1 className="text-2xl">{elem.text}</h1>
          <h5 className="text-lg">{elem.description}</h5>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default Features;
