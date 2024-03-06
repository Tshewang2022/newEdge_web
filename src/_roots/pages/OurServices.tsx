import { Button } from "@/components/ui/button";
import { FaNetworkWired } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import { FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="">
      <div
        className="flex items-center my-[32px] justify-center h-[720px] bg-center bg-no-repeat bg-cover gap-[32px]"
        style={{ backgroundImage: `url('/assets/images/servicebg.jpg')` }}
      >
        <div className="flex justify-center items-center w-[1440px]">
          <div className="w-1/2">
            <h1 className="text-[76px] leading-normal text-white font-sans font-black">
              Our Services
            </h1>
            <p className="text-white pb-[32px] font-sans py-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, delectus.
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, soluta. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt necessitatibus ab cum tempore
              distinctio beatae consectetur, quaerat ullam reiciendis totam
              error ea eligendi atque ex est officiis modi nulla perferendis
              fugit labore enim saepe sed. Hic perspiciatis dolorum alias esse.
            </p>
            <Button className="h-[56px] px-[30px] bg-[#0077b6] hover:bg-[#2a9d8f] text-white font-bold text-[20px] font-sans transition duration-300 ease-in-out">
              Learn more
            </Button>
          </div>
          <div className="w-1/2">
            <img src="/assets/images/ourservices.png" alt="ourservices" />
          </div>
        </div>
      </div>
      <div>
        {/* === OUR SERVICES === */}
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-medium leading-normal mt-[32px] mb-[16px] font-roboto ">
            Services
          </h2>
        </div>
        <div className="flex justify-center items-center pb-[64px]">
          <div className="grid grid-cols-3 max-w-[1440px] h-[640px] gap-[32px]  ">
            <div className="p-[32px]  text-center border-2 border-gray-300 hover:bg-[#ade8f4] transition duration-500 ease-in-out">
              <div className="items-center flex justify-center">
                <MdComputer className="w-[68px] h-[68px]" color="blue" />
              </div>
              <h1 className="text-[32px] font-roboto font-semibold pt-[32px] pb-[16px] ">
                UI/UX Design
              </h1>
              <p className="max-w-[450px] text-[16px] text-[#717171] leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                sed debitis illo libero tempore, ipsam repellendus sint soluta
                mollitia?
              </p>
            </div>
            <div className="p-[32px]  text-center border-2 border-gray-300 hover:bg-[#ade8f4] transition duration-500 ease-in-out">
              <div className="items-center flex justify-center">
                <FaMobileAlt className="w-[68px] h-[68px]" color="blue" />
              </div>
              <h1 className="text-[32px] font-roboto font-semibold pt-[32px] pb-[16px] ">
                App Development
              </h1>
              <p className="max-w-[450px] text-[16px] text-[#717171] leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                sed debitis illo libero tempore, ipsam repellendus sint soluta
                mollitia?
              </p>
            </div>
            <div className="p-[32px]  text-center border-2 border-gray-300 hover:bg-[#ade8f4] transition duration-500 ease-in-out">
              <div className="items-center flex justify-center">
                <FaLaptopCode className="w-[68px] h-[68px]" color="blue" />
              </div>
              <h1 className="text-[32px] font-roboto font-semibold pt-[32px] pb-[16px] ">
                Web Development
              </h1>
              <p className="max-w-[450px] text-[16px] text-[#717171] leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                sed debitis illo libero tempore, ipsam repellendus sint soluta
                mollitia?
              </p>
            </div>
            <div className="p-[32px]  text-center border-2 border-gray-300 hover:bg-[#ade8f4] transition duration-500 ease-in-out">
              <div className="items-center flex justify-center">
                <IoMdSettings className="w-[68px] h-[68px]" color="blue" />
              </div>
              <h1 className="text-[32px] font-roboto font-semibold pt-[32px] pb-[16px] ">
                QA Testing
              </h1>
              <p className="max-w-[450px] text-[16px] text-[#717171] leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                sed debitis illo libero tempore, ipsam repellendus sint soluta
                mollitia?
              </p>
            </div>
            <div className="p-[32px]  text-center border-2 border-gray-300 hover:bg-[#ade8f4] transition duration-500 ease-in-out">
              <div className="items-center flex justify-center">
                <FaNetworkWired className="w-[68px] h-[68px]" color="blue" />
              </div>
              <h1 className="text-[32px] font-roboto font-semibold pt-[32px] pb-[16px] ">
                IT Support
              </h1>
              <p className="max-w-[450px] text-[16px] text-[#717171] leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                sed debitis illo libero tempore, ipsam repellendus sint soluta
                mollitia?
              </p>
            </div>
            <div className="p-[32px]  text-center border-2 border-gray-300 hover:bg-[#ade8f4] transition duration-500 ease-in-out">
              <div className="items-center flex justify-center">
                <TfiWorld className="w-[68px] h-[68px]" color="blue" />
              </div>
              <h1 className="text-[32px] font-roboto font-semibold pt-[32px] pb-[16px] ">
                Dedicated Team
              </h1>
              <p className="max-w-[450px] text-[16px] text-[#717171] leading-[150%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eos
                sed debitis illo libero tempore, ipsam repellendus sint soluta
                mollitia?
              </p>
            </div>
          </div>
        </div>

        {/* === COLLOBORATE === */}
        <div className="my-[32px] bg-slate-200 p-[32px]">
          <div className="flex justify-center items-center">
            <h2 className="text-[32px] font-medium leading-[120%]">
              Want to colloborate with us?
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="justify-center items-center flex max-w-[1440px]">
              <div className="text-[16px] font-medium w-1/2 max-md:flex">
                <div className="items-center px-[16px] py-[16px] bg-blue-200 mb-[32px] w-full shadow-lg hover:bg-[#ade8f4] transition duration-300 ease-in-out">
                  <h2 className="">Networking</h2>
                </div>
                <div className="flex items-center px-[16px] h-[56px] mb-[32px] bg-slate-300 shadow-lg hover:bg-[#ade8f4] transition duration-300 ease-in-out">
                  <h2 className="">Application development</h2>
                </div>
                <div className="flex items-center px-[16px] h-[56px] mb-[32px] bg-slate-300 shadow-lg hover:bg-[#ade8f4] transition duration-300 ease-in-out">
                  <h2 className="py-[16px] ">System integrations</h2>
                </div>
                <div className="flex items-center px-[16px] h-[56px] mb-[32px] bg-slate-300 shadow-lg hover:bg-[#ade8f4] transition duration-300 ease-in-out">
                  <h2 className="py-[16px] ">Server & Storage</h2>
                </div>
              </div>
              <div className="flex justify-center items-center w-1/2 ">
                <div className="px-[32px]">
                  <img src="/assets/images/ux.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit blanditiis provident reiciendis officiis nihil saepe
                    iste perferendis nam impedit cum architecto, sunt inventore
                    nulla aspernatur dolorum, quaerat aliquid. Harum, adipisci.
                  </p>
                  <Button className="shadow-lg bg-[#0077b6] hover:bg-[#2a9d8f]">Learn more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
