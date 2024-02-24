import { Button } from "@/components/ui/button";
import { IoSettingsSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoCloudUploadSharp } from "react-icons/io5";

const Home = () => {
  return (
    <section className="mx-[256px] max-xl:mx-[32px]">
      <div className="flex items-center justify-between max-md:flex-col">
        <div className="w-full flex justify-start items-center ">
          <div className="">
            <h2 className="text-[32px] xl:text-[56px] font-bold font-sans leading-[150%] my-[32px] ">
              Best digital IT & tech <br /> solution to scale <br /> your
              business
            </h2>
            <p className="text-[16px] font-medium leading-normal font-sans">
              We offer best services in Bhutan and outside the country. Customer
              first
            </p>
            <div className="flex gap-[32px]">
              <Button className="bg-[#6366F1] my-[16px] px-[24px] h-[56px]">
                Learn more
              </Button>
              <Button className="bg-[#6366F1] my-[16px] px-[24px] h-[56px]">
                Get started
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center max-md:hidden ">
          <img src="/assets/images/home.png" alt="" className="w-full " />
        </div>
      </div>
      <div>trusted by</div>

      <section className="my-[32px]">
        <div className="flex justify-center items-center">
          <h2 className="text-[24px] font-semibold md:text-[32px]">
            Why you should work with us?
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[16px] font-normal leading normal">
            We offer 6 months of free support for the life of the Tech, and for
            the sake of all the humans around the world
          </p>
        </div>
        <div className="flex justify-between items-center my-[64px]">
          <div className="w-full justify-center">
            <div className="flex justify-center items-center text-[32px] font-semibold py-[64px]">
              <h2>Benefits for we provide</h2>
            </div>
            <div className="flex justify-between items-center gap-[16px]">
              <div className="w-full">
                <GoGraph className="w-[32px] h-[32px]" color="#53dbdb" />
                <h4 className="text-[16px] font-semibold py-[10px]">
                  Analytical App
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, facere!
                </p>
              </div>
              <div className="w-full">
                <IoSettingsSharp
                  className="w-[32px] h-[32px]"
                  color="#53dbdb"
                />
                <h4 className="text-[16px] font-semibold py-[10px]">
                  Analytical App
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, facere!
                </p>
              </div>
            </div>
            {/* === SECOND ONE === */}
            <div className="flex justify-between items-center py-[64px] gap-[16px]">
              <div className="w-full">
                <IoShieldCheckmark
                  className="w-[32px] h-[32px]"
                  color="#53dbdb"
                />
                <h4 className="text-[16px] font-semibold py-[10px]">
                  Analytical App
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, facere!
                </p>
              </div>
              <div className="w-full">
                <IoCloudUploadSharp
                  className="w-[32px] h-[32px]"
                  color="#53dbdb"
                />
                <h4 className="text-[16px] font-semibold py-[10px]">
                  Analytical App
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, facere!
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="">
              <img src="/assets/images/data.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="my-[32px]">subscribe to our newsletter</section>
    </section>
  );
};

export default Home;
