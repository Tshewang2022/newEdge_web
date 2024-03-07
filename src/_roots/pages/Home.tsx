import { IoSettingsSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="">
      <div
        className="flex justify-center item-center bg-gradient-to-r to-[#D1F6FE] from-[#F6D0FD] min-h-screen relative bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2022/04/04/16/24/waves-7111758_960_720.jpg')`,
        }}
      >
        <div className="max-w-[1440px] flex justify-between items-center">
          <div>
            <motion.h1
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4 }}
              className="text-[76px] text-white font-monstat font-normal leading-[100%] text-center max-sm:text-[32px]"
              style={{ fontWeight: 900 }}
            >
              END-TO-END <br /> DEVELOPMENT
            </motion.h1>
            <p className="text-center max-w-[650px] py-[32px] text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              temporibus tenetur dolores animi soluta, alias dolorum architecto
            </p>
            <div className="flex justify-center items-center pt-[32px]">
              <button className="text-[20px] text-white bg-[#0177B6] px-[32px] py-[16px] rounded-md font-semibold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-[128px] absolute bottom-[-49px]">
        <div className="flex justify-between items-center w-[1440px] gap-16 bg-[#f4f4f4] p-[16px] shadow-lg hover:shadow-xl">
          <div className="w-full">
            <img src="/assets/icons/hp.png" alt="hp" />
          </div>
          <div className="w-full">
            <img src="/assets/icons/ibm.png" alt="hp" />
          </div>
          <div className="w-full">
            <img src="/assets/icons/redhat.png" alt="hp" />
          </div>
          <div className="w-full">
            <img src="/assets/icons/wmware.png" alt="hp" />
          </div>
          <div className="w-full">
            <img src="/assets/icons/microsoft.png" alt="hp" />
          </div>
          <div className="w-full">
            <img src="/assets/icons/cisco.png" alt="hp" />
          </div>
        </div>
      </div>
      <section className="mt-[120px] bg-[#FFFFFF">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center flex-row gap-[64px] w-[1440px] max-lg:flex-col">
            {/* for the text */}
            <div className="flex justify-end items-center ">
              <div className="max-sm:px-[16px]">
                <h1 className="text-[36px] leading-normal font-extrabold pb-[32px]">
                  Why you should choose us?
                </h1>
                <p className="text-[#717171] text-[16px] leading-[120%] pb-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, aperiam. Dolore maxime ullam a eaque vero expedita
                  atque aperiam, in minima, soluta autem accusantium eveniet
                  fuga quos saepe ratione id quae, ducimus minus quisquam. Eaque
                  commodi dignissimos reiciendis expedita ipsam? Saepe,
                  voluptates? Ea ab, consectetur adipisci repellendus soluta
                  reiciendis corporis.
                </p>
                <div className="flex justify-start item-center gap-[16px]">
                  <div>
                    <IoSettingsSharp
                      className="w-[40px] h-[40px] "
                      color="#734CB1"
                    />
                    <h4 className="text-[20px] font-sans font-semibold py-[16px] leading-normal hover:text-[#0077b6] hover:font-bold">
                      Quick Support
                    </h4>
                    <div className="w-full h-[2px] bg-green-500" />
                    <p className="text-[#717171] py-[16px] text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                  <div>
                    <FaMedal className="w-[40px] h-[40px]" color="#734CB1" />
                    <h4 className="text-[20px] font-sans font-semibold py-[16px] leading-normal hover:text-[#0077b6] hover:font-bold">
                      Experience
                    </h4>
                    <div className="w-full h-[2px] bg-green-500" />
                    <p className="text-[#717171] py-[16px] text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/images/chooseus.png"
              alt="choose"
              className="transition-transform duration-300 transform hover:scale-110"
            />
          </div>
        </div>
        <div className="bg-[#221F3C] py-[64px]">
          <h1 className="text-center  font-sans text-[48px] font-black text-white max-sm:text-[32px]">
            Design the Concept
            <br /> for your Business Idea Now
          </h1>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-[32px] py-[64px] max-w-[1440px]">
              <div className="bg-[#262051] hover:bg-[#219ebc] p-[32px] border-2 border-[#717171] transition duration-300 ease-in-out">
                <h2 className="text-[24px] font-semibold text-start py-[16px] text-white  ">
                  Product Design
                </h2>
                <p className="text-white font-semibold text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Inventore, facilis.
                </p>
                <a
                  href=""
                  className="text-[14px] font-sans font-normal text-white hover:font-bold"
                >
                  LEARN MORE
                </a>
                <div className="flex justify-end items-end pt-[16px]">
                  <MdOutlineDesignServices
                    className="w-[40px] h-[40px]"
                    color="green"
                  />
                </div>
              </div>
              <div className="bg-[#262051]  hover:bg-[#219ebc]  p-[32px] group-hover:text-black border-2 border-[#717171] transition duration-300 ease-in-out">
                <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                  Development
                </h2>
                <p className="text-white font-semibold text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Inventore, facilis.
                </p>
                <a
                  href=""
                  className="text-[14px] font-sans font-normal text-white hover:font-bold"
                >
                  LEARN MORE
                </a>
                <div className="flex justify-end items-end pt-[16px]">
                  <MdOutlineDesignServices
                    className="w-[40px] h-[40px]"
                    color="green"
                  />
                </div>
              </div>
              <div className="bg-[#262051]  hover:bg-[#219ebc] p-[32px] group-hover:text-black border-2 border-[#717171] transition duration-300 ease-in-out">
                <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                  Data Analytics
                </h2>
                <p className="text-white font-semibold text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Inventore, facilis.
                </p>
                <a
                  href=""
                  className="text-[14px] font-sans font-normal text-white hover:font-bold"
                >
                  LEARN MORE
                </a>
                <div className="flex justify-end items-end pt-[16px]">
                  <MdOutlineDesignServices
                    className="w-[40px] h-[40px]"
                    color="green"
                  />
                </div>
              </div>
              <div className="bg-[#262051]  hover:bg-[#219ebc] p-[32px] group-hover:text-black border-2 border-[#717171] transition duration-300 ease-in-out">
                <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                  Product Design
                </h2>
                <p className="text-white font-semibold text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Inventore, facilis.
                </p>
                <a
                  href=""
                  className="text-[14px] font-sans font-normal text-white hover:font-bold"
                >
                  LEARN MORE
                </a>
                <div className="flex justify-end items-end pt-[16px]">
                  <MdOutlineDesignServices
                    className="w-[40px] h-[40px]"
                    color="green"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[64px]">
          <div
            className="w-[1440px] h-[350px] bg-no-repeat bg-transparent bg-cover bg-top
            "
            style={{
              backgroundImage: `url('/assets/images/leadership-team.jpg')`,
            }}
          >
            <div className="flex justify-between pt-[64px] px-[32px] max-sm:flex-col flex-row">
              <div>
                <p className="text-[20px] font-sans leading-normal font-normal text-white max-sm:text-center">
                  We are more than just a team
                </p>
                <h1 className="text-[48px] text-white font-black max-sm:text-[32px] max-sm:w-full max-sm:text-center max-sm:pb-[16px]">
                  LETS BUILD YOUR WEBSITE
                </h1>
              </div>
              <button className="text-[16px] font-sans font-bold hover:bg-[#ade8f4] hover:text-black px-[24px] border-2 border-white h-[56px] text-white">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
        <div className="my-[64px] bg-[#f4f4f4] py-[64px] ">
          <h1 className="text-[48px] leading-[100%] text-center font-black max-sm:text-[32px]">
            What clients say about us
          </h1>
          <div className="flex justify-center items-center  ">
            <div className="flex justify-center flex-row items-center gap-[32px] py-[32px] max-sm:flex-col">
              <div className="bg-white shadow-lg p-[36px] rounded-md  transition duration-300 ease-in-out">
                <div className="flex justify-start items-center gap-[32px] ">
                  <img
                    src="/assets/images/profile.jpg"
                    alt=""
                    className="w-[96px] h-[96px] rounded-full"
                  />
                  {/* <div className="bg-blue-400 h-[96px] w-[96px] rounded-full"></div> */}
                  <h2 className="text-[32px] text-black leading-[120%] font-sans font-semibold max-sm:text-[24px]">
                    Tshewang Gyaltshen
                  </h2>
                </div>
                <p className="max-w-[628px] py-[32px]  font-sans text-[16px] leading-normal">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, recusandae amet repellendus quisquam ea cumque dolor
                  laudantium esse harum, nesciunt totam reiciendis aut
                  consequuntur provident minus omnis molestiae officia laborum
                  incidunt dolorum natus voluptatem similique? Ab ad facilis
                  tempora molestias accusantium laboriosam et laudantium illo,
                  magni at dolorem blanditiis ex!"
                </p>
              </div>
              <div className="bg-white shadow-lg p-[36px] rounded-md  transition duration-300 ease-in-out">
                <div className="flex justify-start items-center gap-[32px]">
                  <img
                    src="/assets/images/profile.jpg"
                    alt=""
                    className="w-[96px] h-[96px] rounded-full"
                  />
                  <h2 className="text-[32px] text-black leading-[120%] font-sans font-semibold max-sm:text-[24px]">
                    Nima Wangdi
                  </h2>
                </div>
                <p className="max-w-[628px] py-[32px] font-sans text-[16px] leading-normal ">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, recusandae amet repellendus quisquam ea cumque dolor
                  laudantium esse harum, nesciunt totam reiciendis aut
                  consequuntur provident minus omnis molestiae officia laborum
                  incidunt dolorum natus voluptatem similique? Ab ad facilis
                  tempora molestias accusantium laboriosam et laudantium illo,
                  magni at dolorem blanditiis ex!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
