import { Button } from "@/components/ui/button";
import { IoSettingsSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoCloudUploadSharp } from "react-icons/io5";

const Home = () => {
  return (
    <section className="mx-[256px] max-xl:mx-[32px]">
      <div className="flex items-center justify-between max-md:flex-col bg-[#F5F5F7] mt-[32px]">
        <div className="w-full flex justify-start items-center ">
          <div className="px-[32px] max-md:px-[16px]">
            <h2 className="text-[32px] xl:text-[56px] font-bold font-roboto leading-[150%] my-[32px] ">
              Best digital IT & tech <br /> solution to scale <br /> your
              business
            </h2>
            <p className="text-[16px] font-medium leading-normal font-sans text-[#717171]">
              We offer best services in Bhutan and outside the country. Customer
              first
            </p>
            <div className="flex gap-[16px]">
              <Button className="bg-[#6366F1] my-[16px] px-[32px] h-[56px]">
                Learn more
              </Button>
              <Button className="bg-[#6366F1] my-[16px] px-[32px] h-[56px]">
                Get started
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center max-md:hidden ">
          <img src="/assets/images/home.png" alt="" className="w-full " />
        </div>
      </div>
      <div>
        {/* ===SHOULD BE STORED IN THE CONTANTS === */}{" "}
        <h2 className="text-[24px] font-semibold leading-normal font-roboto">
          Trusted by
        </h2>
        <div className="flex flex-col justify-between items-center md:flex-row gap-[16px] mb-[64px]">
          <div className="flex justify-center items-center bg-slate-400 w-full h-[56px] rounded-md">
            <h4 className="text-[16px] font-medium text-white">airbnb</h4>
          </div>
          <div className="flex justify-center items-center bg-slate-400 h-[56px] w-full rounded-md">
            <h4 className="text-[16px] font-medium text-white">airbnb</h4>
          </div>
          <div className="flex justify-center items-center bg-slate-400 h-[56px] w-full rounded-md">
            <h4 className="text-[16px] font-medium text-white">airbnb</h4>
          </div>
          <div className="flex justify-center items-center bg-slate-400 h-[56px] w-full rounded-md">
            <h4 className="text-[16px] font-medium text-white">airbnb</h4>
          </div>
          <div className="flex justify-center items-center bg-slate-400 h-[56px] w-full rounded-md">
            <h4 className="text-[16px] font-medium text-white">airbnb</h4>
          </div>
        </div>
      </div>
      {/* <hr className="bg-gray-700 h-[2px] w-full border-[1px]" /> */}
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex justify-center items-center p-[16px] max-md:hidden">
          <img
            src="/assets/images/projects.png"
            alt=""
            className="w-full bg-no-repeat bg-cover group-hover:scale-110 duration-100"
          />
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div>
            <h2 className="text-[32px] font-bold pb-[32px] font-roboto">
              Our recent projects
            </h2>
            <li className="text-[24px] font-medium leading-[120%] pb-[16px] px-[16px] font-sans">
              ECMS for the Minstry of Educations
            </li>
            <li className="text-[24px] font-medium leading-[120%] pb-[32px] px-[16px] font-sans">
              CPMS for Royal Bhutan police
            </li>
            <Button className="h-[56px] w-[210px] mt-[32px]">Learn more</Button>
          </div>
        </div>
      </div>

      <section className="my-[32px] ">
        <div className="flex justify-center items-center">
          <h2 className="text-[24px] font-semibold md:text-[32px] font-roboto">
            Why you should work with us?
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[16px] font-normal leading normal font-sans">
            We offer 6 months of free support for the life of the Tech, and for
            the sake of all the humans around the world
          </p>
        </div>
        <div className="flex justify-between items-center p-[32px] bg-slate-200 rounded-md mt-[16px]">
          <div className="w-full justify-center">
            <div className="flex justify-center items-center text-[32px] font-semibold py-[32px]">
              <h2 className="font-roboto ">Benefits we provide</h2>
            </div>
            <div className="flex justify-between items-center max-md:flex-col">
              <div className="w-full px-[16px]">
                <GoGraph className="w-[32px] h-[32px]" color="#53dbdb" />
                <h4 className="text-[16px] font-semibold py-[10px] font-sans">
                  Analytical App
                </h4>
                <p className="font-sans">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, facere!
                </p>
              </div>
              <div className="w-full px-[16px]">
                <IoSettingsSharp
                  className="w-[32px] h-[32px]"
                  color="#53dbdb"
                />
                <h4 className="text-[16px] font-semibold py-[10px] font-sans">
                  Analytical App
                </h4>
                <p className="font-sans">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus, facere!
                </p>
              </div>
            </div>
            {/* === SECOND ONE === */}
            <div className="flex justify-between items-center py-[64px] gap-[16px] max-md:flex-col">
              <div className="w-full px-[16px]">
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
              <div className="w-full px-[16px]">
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
          <div className="flex w-full justify-center max-md:hidden">
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
