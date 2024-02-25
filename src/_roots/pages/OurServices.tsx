import { Button } from "@/components/ui/button";
import { FaNetworkWired } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="mx-[256px] max-xl:mx-[32px]">
      <div
        className="flex items-center my-[32px] h-[640px] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/assets/images/servicebg.jpg')` }}
      >
        <div className="px-[32px] max-sm:px-[10px]">
          {/* their should be the images as the background */}
          <h2 className="text-white text-[48px] font-semibold">Our Services</h2>
          <p className="text-white pb-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
            delectus.
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci, soluta.
          </p>
          <Button className="h-[56px] px-[30px] bg-[#53dbdb] text-black">
            Lear more
          </Button>
        </div>
      </div>
      <div>
        {/* === OUR SERVICES === */}
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-medium leading-normal mt-[32px] mb-[16px] font-roboto ">
            Services
          </h2>
        </div>
        <div className="flex justify-between item-center gap-[32px] pb-[32px]">
          <div>
            <div className="flex justify-center items-center mb-[8px]">
              <FaNetworkWired className="w-[46px] h-[46px]" />
            </div>

            <div className="flex justify-center items-center">
              <h4 className="text-[16px] font-medium">Networking</h4>
            </div>
            <div className="flex justify-center items-center">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                laborum quaerat cupiditate rerum enim. A facere consequuntur
                distinctio impedit eaque!
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-[8px]">
              <MdComputer className="w-[46px] h-[46px]" />
            </div>
            <h4 className="flex justify-center items-center text-[16px] font-medium">
              Application development
            </h4>
            <div>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                recusandae minus officia blanditiis? Omnis et dignissimo
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-[8px]">
              <IoMdSettings className="w-[46px] h-[46px]" />
            </div>
            <div className="flex justify-center items-center">
              <h4 className="text-[16px] font-medium ">Sytem intergrations</h4>
            </div>
            <div className="flex justify-center items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                in itaque, eos doloremque exercitationem quo
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-[8px]">
              <FaCloudDownloadAlt className="w-[46px] h-[46px]" />
            </div>
            <div className="flex justify-center items-center">
              <h4 className="text-[16px] font-medium">Server & Storage</h4>
            </div>
            <div className="flex justify-center items-center mb-[8px]">
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                ratione temporibus soluta deserunt! Fuga aspernatur dolorum
                nemo, molestias eaque architecto.
              </p>
            </div>
          </div>
        </div>

        {/* === COLLOBORATE === */}
        <div className="my-[32px]">
          <div className="flex justify-center items-center">
            <h2 className="text-[32px] font-medium leading-[120%]">
              Want to colloborate with us?
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[16px] font-medium w-1/3">
              <div className="flex items-center px-[16px] h-[56px] mb-[8px] bg-slate-200 w-full">
                <h2 className="">Networking</h2>
              </div>
              <div className="flex items-center px-[16px] h-[56px] mb-[8px] bg-slate-200 ">
                <h2 className="">Application development</h2>
              </div>
              <div className="flex items-center px-[16px] h-[56px] mb-[8px] bg-slate-200 ">
                <h2 className="py-[16px]">System integrations</h2>
              </div>
              <div className="flex items-center px-[16px] h-[56px] mb-[8px] bg-slate-200">
                <h2 className="py-[16px]">Server & Storage</h2>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <img src="/assets/images/ux.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
