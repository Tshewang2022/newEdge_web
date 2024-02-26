import { FaFacebookSquare } from "react-icons/fa";

import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <section className="mx-[256px] max-xl:mx-[32px]">
      <div
        className="bg-cover bg-center bg-no-repeat h-[640px] flex justify-center items-center opacity-1"
        style={{ backgroundImage: `url('/assets/images/technology.jpg')` }}
      >
        <div className="flex justify-center items-center">
          <h2 className="text-[56px] font-bold leading-normal font-roboto">
            About Newedge
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center my-[64px]">
        <div className="text-center">
          <h2 className="text-[32px] leading-normal font-sans font-semibold">
            Mission & Vision
          </h2>
          <p className="max-w-[640px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            sapiente vel quas rerum autem debitis voluptatibus molestiae, nam a
            perferendis!
          </p>
        </div>
      </div>
      {/* <div className="my-[32px] flex flex-col justify-between items-center gap-[32px] md:flex-row">
        <div className="w-1/3 flex justify-center items-center">
          <div className="flex flex-col max-md:flex-row">
            <div>
              <h2 className="text-[32px] font-bold leading-[120%]">Mission</h2>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-[32px] font-bold leading-[120%]">&</h2>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-[32px] font-bold leading-[120%]">Vision</h2>
            </div>
          </div>
        </div>
        <div
          className="w-[2px] bg-green-400 h-[150px] max-md:hidden
        "
        />
        <div className="w-2/3 px-[32px]">
          <div className="bg-slate-400 px-[128px] py-[64px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
            reiciendis laudantium totam animi illo, aliquid cum quasi ratione
            doloremque, repudiandae porro cupiditate impedit consectetur amet
            dolores saepe? Amet, commodi necessitatibus? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quaerat, a quod. Ea incidunt
            minima, fugit inventore nam facere nulla eveniet at quibusdam
            laborum corrupti eum cumque sed earum vel vero accusantium. Animi
            perferendis consectetur deleniti illum in sed numquam, placeat
            possimus. Eius perspiciatis dolor omnis non, rerum quisquam saepe
            facere?
          </div>
        </div>
      </div> */}
      <div className="my-[32px] py-[32px] bg-[#F5F5F7]">
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-semibold">Meet our Team</h2>
        </div>
        <div>
          {/* === BOARD OF DIRECTORS */}
          <div className="my-[16px]">
            <h4 className="text-[24px] font-medium">Board of Directors</h4>
            <div className="grid grid-cols-4 gap-[32px] max-md:grid-cols-1">
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </div>

          {/* === SOFTWARE TEAM */}
          <div className="my-[64px]">
            <h4 className="text-[24px] font-medium">Software Team</h4>
            <div className="grid grid-cols-4 gap-[32px] max-md:grid-cols-1">
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
              <div className="shadow-lg overflow-hidden rounded-md">
                <div className="flex justify-center items-center mb-[32px]">
                  <img src="/assets/images/profile.jpg" alt="" />
                </div>
                <p className="text-[16px] font-semibold text-center">
                  Tshewang Gyaltshen
                </p>
                <p className="text-center">Junior developer</p>
                <div className="flex justify-center items-center gap-[8px] py-[16px]">
                  <FaFacebookSquare className="w-[24px] h-[24px]" />
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <FaSquareXTwitter className="w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
