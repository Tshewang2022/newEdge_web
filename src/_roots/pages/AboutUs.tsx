import {
  FaInstagramSquare,
  FaReact,
  FaPhp,
  FaHtml5,
  FaLongArrowAltRight,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <section className="">
      <div
        className="bg-cover bg-center bg-no-repeat h-[640px] flex justify-center items-center opacity-1 object"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_1280.jpg')`,
        }}
      >
        <div className="flex justify-center items-center">
          <h2 className="text-[56px] font-bold leading-normal font-roboto text-white text-center">
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
      <div className="bg-[#211F3B] flex-row flex justify-center items-center gap-[64px] py-[64px] max-sm:py-[16px] px-[32px]">
        <div className="flex justify-start items-center w-[1440px] max-sm:flex-col flex-row">
          <img
            src="/assets/images/image-about.png"
            alt=""
            className="transition-transform duration-300 transform hover:scale-110"
          />
          <div className="px-[64px] max-sm:px-0">
            <h2 className="text-white text-[48px] font-sans font-bold leading-normal max-sm:text-[32px]">
              What We Actually Do
            </h2>
            <div className="flex justify-start gap-[16px] py-[32px]">
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2a9d8f] hover:bg-[#2a9d8f]">
                <FaPhp className="w-[32px] h-[32px] icons" color="white" />
              </div>
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2a9d8f] hover:bg-[#2a9d8f]">
                <FaReact className="w-[32px] h-[32px]" color="white" />
              </div>
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2a9d8f] hover:bg-[#2a9d8f]">
                <DiJavascript className="w-[32px] h-[32px]" color="white" />
              </div>
              <div className="text-white font-sans text-[14px] p-[16px] border-2 border-[#2a9d8f] hover:bg-[#2a9d8f]">
                <FaHtml5 className="w-[32px] h-[32px]" color="white" />
              </div>
            </div>
            <h4 className="text-[24px] text-white font-sans leading-[120%] font-semibold pb-[16px]">
              Full stack website development sevices
            </h4>
            <p className="font-sans text-[16px] text-white leading-[150%]  max-sm:w-full w-[540px] pb-[64px]">
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
          <div className="my-[16px]">
            {/* === MANAGEMENT TEAM === */}
            <div className="flex justify-center items-center mt-[32px]">
              <div className="grid  grid-cols-4 gap-[32px] max-sm:grid-cols-1 max-md:grid-cols-2">
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
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
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg  transition duration-500 ease-in-out transform hover:scale-105">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px] "
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
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
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
                <div className="border-2 border-gray-300 max-w-[350px] rounded-[12px] shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
                  <img
                    src="/assets/images/profile.jpg"
                    alt="latest"
                    className="rounded-t-[12px]"
                  />
                  <div className="py-[32px]">
                    <h2 className="text-[20px] font-roboto font-semibold text-center">
                      Nima Wangdi
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
        <div className="flex items-center justify-center px-[32px] mt-[64px] max-sm:px-0">
          <div className="grid grid-cols-4 max-md:grid-cols-2  bg-gradient-to-r from-[#46DBFC] to-[#664DB5]  py-[78px] p-[32px] gap-[32px] max-sm:gap-[16px] max-sm:px-0 w-[1490px]">
            <div className="text-center px-[32px] max-sm:px-2">
              <h1 className="text-white text-[56px] font-sans font-black max-sm:text-[32px]">
                <CountUp start={0} end={200} delay={1} duration={5} />+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold max:sm:text-[16px]">
                ACTIVE CLIENTS
              </h2>
            </div>
            <div className="text-center px-[32px] max-sm:px-2">
              <h1 className="text-white text-[56px] font-sans font-black max-sm:text-[32px]">
                <CountUp start={0} end={10} delay={1} duration={5} />+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold max:sm:text-[16px]">
                UNDER DEVELOPMENT
              </h2>
            </div>
            <div className="text-center px-[32px] max-sm:px-2">
              <h1 className="text-white text-[56px] font-sans font-black max-sm:text-[32px]">
                <CountUp start={0} end={20} delay={1} duration={5} />+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold max:sm:text-[16px]">
                UNDER SUPPORT
              </h2>
            </div>
            <div className="text-center px-[32px] max-sm:px-2">
              <h1 className="text-white text-[56px] font-sans font-black max-sm:text-[32px]">
                <CountUp start={0} end={20} delay={1} duration={5} />
                M+
              </h1>
              <h2 className="text-white text-[20px] font-sans font-bold max:sm:text-[16px]">
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
