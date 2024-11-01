import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="container w-full min-h-[100vh] pt-20 flex flex-col">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow
        </span>{" "}
      </h1>
      <div className="content flex flex-col sm:flex-row flex-grow">
        <div className="left sm:w-full h-full lg:w-1/2">
          <img className="object-cover scale-75" src={codeImg} alt="" />
        </div>
        <div className="right sm:w-full lg:w-1/2 flex flex-col justify-center gap-8">
          {checklistItems.map((elem, index) => {
            return (
              <div key={index} className="flex gap-5">
                <CheckCircle2 className="text-green-600" />
                <div className="right flex flex-col gap-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-3xl">
                    {elem.title}
                  </h3>
                  <h5 className="text-md sm:text-lg lg:text-xl">
                    {elem.description}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
