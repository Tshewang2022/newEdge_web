import {
  FaInstagramSquare,
  FaReact,
  FaPhp,
  FaHtml5,
  FaLongArrowAltRight,
  FaFacebookSquare,
} from "react-icons/fa";

import CountUp from "react-countup";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";

import { useState } from "react";

const AboutUs = () => {
  const [count, setCount] = useState(false);
  return (
    <section className="">
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
          <h2 className="text-[32px] leading-normal font-semibold font-roboto">
            Mission & Vision
          </h2>
          <p className="max-w-[640px] font-sans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            sapiente vel quas rerum autem debitis voluptatibus molestiae, nam a
            perferendis!
          </p>
        </div>
      </div>
      <div className="bg-[#211F3B] flex-row flex justify-center items-center gap-[64px] max-lg:flex-col py-[128px] px-[32px]">
        <div className="flex justify-start items-center w-[1440px] ">
          <img src="/assets/images/image-about.png" alt="" />
          <div className="px-[64px]">
            <h2 className="text-white text-[48px] font-sans font-bold leading-normal">
              What We Actually Do
            </h2>
            <div className="flex justify-start gap-[16px] py-[32px]">
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2cbaed] hover:bg-[#2cbaed]">
                <FaPhp className="w-[32px] h-[32px] icons" color="white" />
              </div>
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2cbaed] hover:bg-[#2cbaed]">
                <FaReact className="w-[32px] h-[32px]" color="white" />
              </div>
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2cbaed] hover:bg-[#2cbaed]">
                <DiJavascript className="w-[32px] h-[32px]" color="white" />
              </div>
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2cbaed] hover:bg-[#2cbaed]">
                <FaHtml5 className="w-[32px] h-[32px]" color="white" />
              </div>
            </div>
            <h4 className="text-[24px] text-white font-sans leading-[120%] font-semibold pb-[16px]">
              Full stack website development sevices
            </h4>
            <p className="font-sans text-[16px] text-white leading-[150%] max-w-[540px] pb-[64px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse
              deleniti beatae odio qui obcaecati fugiat repudiandae consequuntur
              ex iure! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit voluptas cum dolores ipsum mollitia eveniet dolor
              perspiciatis ut magni autem vero eum, quae illo asperiores neque?
              Mollitia debitis optio aliquid.
            </p>
            <div className="flex gap-[16px] items-center">
              <FaLongArrowAltRight
                className="w-[24px] h-[24px]"
                color="#3c90ca"
              />
              <a href="" className="text-[#3C90CA] font-sans">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[32px] py-[32px]">
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-semibold font-roboto">
            Meet our Team
          </h2>
        </div>
        <div>
          {/* === BOARD OF DIRECTORS */}
          <div className="my-[16px]">
            {/* === SOFTWARE TEAM === */}
            {/* <div className="flex justify-center items-center">
              <div className="grid  grid-cols-4 px-[32px] gap-[32px]">
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">TSHEWANG GYALTSEHN</h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">JUNIOR DEVELOPER</p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]"/>
                      <FaSquareXTwitter className="w-[24px] h-[24px]"/>
                      <FaFacebookSquare className="w-[24px] h-[24px]"/>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">TSHEWANG GYALTSEHN</h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">JUNIOR DEVELOPER</p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">TSHEWANG GYALTSEHN</h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">JUNIOR DEVELOPER</p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">TSHEWANG GYALTSEHN</h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">JUNIOR DEVELOPER</p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
             
              </div>
            </div> */}

            {/* === MANAGEMENT TEAM === */}
            <div className="flex justify-center items-center mt-[32px]">
              <div className="grid  grid-cols-4 px-[32px] gap-[32px]">
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">
                      TSHEWANG GYALTSEHN
                    </h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">
                      FOUNDER
                    </p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">
                      TSHEWANG GYALTSEHN
                    </h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">
                      CO-FOUNDER
                    </p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">
                      TSHEWANG GYALTSEHN
                    </h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">
                      CEO
                    </p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">
                      TSHEWANG GYALTSEHN
                    </h2>
                    <p className="text-center font-sans font-semibold text-[#717171]">
                      PROJECT MANAGER
                    </p>
                    <div className="flex justify-center items-center gap-[16px] pt-[16px]">
                      <FaInstagramSquare className="w-[24px] h-[24px]" />
                      <FaSquareXTwitter className="w-[24px] h-[24px]" />
                      <FaFacebookSquare className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-[32px] mt-[64px]">
          <div className="flex justify-between items-center  bg-gradient-to-r from-[#46DBFC] to-[#664DB5]  py-[78px] p-[32px] gap-[32px] w-[1490px]">
            <div className="text-center px-[32px]">
              <h1 className="text-white text-[56px] font-sans font-black">
                <CountUp start={10} end={200} delay={0} duration={5} />+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold">
                ACTIVE CLIENTS
              </h2>
            </div>
            <div className="text-center px-[32px]">
              <h1 className="text-white text-[56px] font-sans font-black">
                <CountUp start={0} end={20} delay={0} duration={5} />+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold">
                UNDER DEVELOPMENT
              </h2>
            </div>
            <div className="text-center px-[32px]">
              <h1 className="text-white text-[56px] font-sans font-black">
                <CountUp start={0} end={30} delay={0} duration={5} />+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold">
                UNDER SUPPORT
              </h2>
            </div>
            <div className="text-center px-[32px] ">
              <h1 className="text-white text-[56px] font-sans font-black">
                <CountUp start={0} end={20} delay={0} duration={5} />
                M+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold">
                REVENUES
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
