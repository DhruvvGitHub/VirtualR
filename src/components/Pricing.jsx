import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="w-full min-h-[100vh] px-10 flex flex-col justify-center">
      <h3 className="text-3xl sm:text-5xl lg:text-6xl text-center">Pricing</h3>

      <div className="flex flex-col lg:flex-row justify-between">
        {pricingOptions.map((elem, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-5 py-5">
              <div className="border border-l-neutral-700 rounded-xl px-5 py-4 flex flex-col gap-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl">
                  {elem.title}
                  {elem.title === "Pro" && (
                    <span className="text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">(Most Popular)</span>
                  ) } 
                </h3>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl">
                  {elem.price} <span className="text-xl sm:text-3xl lg:text-3xl text-neutral-500">/month</span>{" "}
                </h1>
                <div className="flex flex-col gap-8">
                  {elem.features.map((feature, i) => (
                    <h5 key={i} className="flex items-center text-lg">
                      <CheckCircle2 className="mr-2" />
                      {feature}
                    </h5>
                  ))}
                </div>
                <a href="#" className="border border-orange-500 py-3 rounded-lg text-center">Subscribe</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
