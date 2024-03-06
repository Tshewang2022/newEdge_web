// import { Button } from "@/components/ui/button";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
// import { SiTestinglibrary } from "react-icons/si";

const Home = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between max-md:flex-col mt-[32px]">
        <div className="w-full flex justify-start items-center ">
          <div className="px-[32px] max-md:px-[16px]"></div>
        </div>
      </div>
      <div>
        {/* ===SHOULD BE STORED IN THE CONTANTS === */}{" "}
        <h2 className="text-[24px] font-semibold leading-normal font-roboto">
          Trusted by
        </h2>
        <div className="flex flex-col justify-between items-center md:flex-row gap-[16px] mb-[64px]">
          <div className="flex justify-center items-center bg-slate-400 w-full h-[56px] rounded-md">
            <h4 className="text-[16px] font-medium text-white">Microsoft</h4>
          </div>
          <div className="flex justify-center items-center bg-slate-400 h-[56px] w-full rounded-md">
            <h4 className="text-[16px] font-medium text-white">Cisco</h4>
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

      <section className="my-[32px] bg-[#FFFFFF">
        <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center gap-[64px] w-[1440px]">
            {/* for the text */}
            <div className="flex justify-end items-center ">
              <div className="">
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
                      className="w-[40px] h-[40px]"
                      color="#734CB1"
                    />
                    <h4 className="text-[20px] font-sans font-semibold py-[16px] leading-normal">
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
                    <h4 className="text-[20px] font-sans font-semibold py-[16px] leading-normal">
                      Experience
                    </h4>
                    <div className="w-full h-[2px] bg-green-500" />
                    <p className="text-[#717171] py-[16px] text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex justify-start item-center gap-[16px] ">
                  {/* <div>
                    <SiTestinglibrary
                      className="w-[40px] h-[40px]"
                      color="#734CB1"
                    />
                    <h4 className="text-[20px] font-sans font-semibold py-[16px] leading-normal">
                      QA Testing
                    </h4>
                    <div className="w-full h-[2px] bg-green-500" />
                    <p className="text-[#717171] py-[16px] text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div> */}
                  {/* <div>
                    <MdOutlineDesignServices
                      className="w-[40px] h-[40px]"
                      color="#734CB1"
                    />
                    <h4 className="text-[20px] font-sans font-semibold py-[16px] leading-normal">
                      UX/UI design
                    </h4>
                    <div className="w-full h-[2px] bg-green-500" />
                    <p className="text-[#717171] py-[16px] text-[14px]">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            {/* for the image */}

            <img src="/assets/images/chooseus.png" alt="choose" className="" />
          </div>
        </div>
        <div className="bg-[#221F3C] py-[64px]">
          <h1 className="text-center  font-sans text-[48px] font-black text-white">
            Design the Concept
            <br /> for your Business Idea Now
          </h1>
          <div className="flex justify-center items-center gap-[32px] py-[64px]">
            <div className="bg-[#262051] hover:bg-white p-[32px] border-2 border-[#717171]">
              <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                Product Design
              </h2>
              <p className="text-[#717171] text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Inventore, facilis.
              </p>
              <a
                href=""
                className="text-[14px] font-sans font-normal text-[#45BAFB]"
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
            <div className="bg-[#262051] hover:bg-white  p-[32px] group-hover:text-black border-2 border-[#717171]">
              <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                Development
              </h2>
              <p className="text-[#717171] text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Inventore, facilis.
              </p>
              <a
                href=""
                className="text-[14px] font-sans font-normal text-[#45BAFB]"
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
            <div className="bg-[#262051] hover:bg-white p-[32px] group-hover:text-black border-2 border-[#717171]">
              <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                Data Analytics
              </h2>
              <p className="text-[#717171] text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Inventore, facilis.
              </p>
              <a
                href=""
                className="text-[14px] font-sans font-normal text-[#45BAFB]"
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
            <div className="bg-[#262051] hover:bg-white p-[32px] group-hover:text-black border-2 border-[#717171]">
              <h2 className="text-[24px] font-semibold text-start py-[16px] text-white ">
                Product Design
              </h2>
              <p className="text-[#717171] text-[14px] font-sans leading-[150%] max-w-[268px] pb-[16px] mb-[32px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Inventore, facilis.
              </p>
              <a
                href=""
                className="text-[14px] font-sans font-normal text-[#45BAFB]"
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
        <div className="flex justify-center items-center mt-[64px]">
          <div
            className="min-w-[1440px] h-[350px] bg-no-repeat bg-transparent bg-cover bg-top
            "
            style={{
              backgroundImage: `url('/assets/images/leadership-team.jpg')`,
            }}
          >
            <div className="flex justify-between pt-[64px] px-[32px]">
              <div>
                <p className="text-[20px] font-sans leading-normal font-normal text-white">
                  We are more than just a team
                </p>
                <h1 className="text-[48px] text-white font-black">
                  LETS BUILD YOUR WEBSITE
                </h1>
              </div>
              <button className="text-[16px] font-sans font-bold hover:bg-blue-400 hover:text-black px-[24px] border-2 border-white h-[56px] text-white">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
        <div className="my-[64px] bg-[#f4f4f4] py-[64px]">
          <h1 className="text-[48px] leading-[100%] text-center font-black">
            What clients <br /> say about us
          </h1>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-[32px] py-[32px]">
              <div className="bg-white shadow-lg p-[36px] rounded-md">
                <div className="flex justify-start items-center gap-[32px]">
                  <img
                    src="/assets/images/profile.jpg"
                    alt=""
                    className="w-[96px] h-[96px] rounded-full"
                  />
                  {/* <div className="bg-blue-400 h-[96px] w-[96px] rounded-full"></div> */}
                  <h2 className="text-[32px] text-black leading-[120%] font-sans font-semibold">
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
              <div className="bg-white shadow-lg p-[36px] rounded-md">
                <div className="flex justify-start items-center gap-[32px]">
                  <img
                    src="/assets/images/profile.jpg"
                    alt=""
                    className="w-[96px] h-[96px] rounded-full"
                  />
                  {/* <div className="bg-blue-400 h-[96px] w-[96px] rounded-full"></div> */}
                  <h2 className="text-[32px] text-black leading-[120%] font-sans font-semibold">
                    Tshewang Gyaltshen
                  </h2>
                </div>
                <p className="max-w-[628px] py-[32px] font-sans text-[16px] leading-normal">
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
