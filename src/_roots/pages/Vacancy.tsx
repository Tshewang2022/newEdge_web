import { Button } from "@/components/ui/button";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";

const Vacancy = () => {
  return (
    <section >
      {/* should contain the background images defined for vancancy */}
      <div
        className="h-[640px] bg-no-repeat bg-cover bg-center flex items-center mb-[64px] w-full object-cover opacity-2"
        style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2018/12/10/10/21/earth-3866609_1280.jpg')` }}
      >
        <div className="px-[32px] flex justify-center w-full  flex-col items-center">
          <h2 className="text-[46px] font-bold text-white font-roboto">
            Join our Team
          </h2>
          <p className="text-white font-sans leading-[120%] font-semibold ">
            Our team has amazing culture and awesome people that <br /> we need
            to have in the country for the love of the people
          </p>
        </div>
      </div>

      <div className="mx-[256px] max-xl:mx-[32px]">
        <div className="flex justify-center items-center mb-[16px]">
        <h2 className="text-[32px] leading-normal font-roboto font-semibold">
          Vacancy
        </h2>
      </div>
      <div className="">
        <div className="bg-slate-300 py-[32px] px-[32px] rounded-md mb-[16px] flex justify-between items-center max-md:flex-col">
          <div>
            <h4 className="text-[24px] font-medium font-sans">
              Fontend developer, with minimum of 5 years experience
            </h4>
            <p className="font-sans text-[16px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quibusdam suscipit pariatur similique labore. Facere iste dicta
              voluptas eaque quibusdam?
            </p>
          </div>
          <div>
            <Button className="bg-[#0077b6] hover:bg-[#2a9d8f]">Apply</Button>
          </div>
        </div>
        <div className="bg-slate-300 py-[32px] px-[32px] rounded-md mb-[16px] flex justify-between items-center max-md:flex-col">
          <div>
            <h4 className="text-[24px] font-medium font-sans">
              Fontend developer, with minimum of 5 years experience
            </h4>
            <p className="text-[16px] font-sans ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quibusdam suscipit pariatur similique labore. Facere iste dicta
              voluptas eaque quibusdam?
            </p>
          </div>
          <div>
            <Button className="bg-[#0077b6] hover:bg-[#2a9d8f]">Apply</Button>
          </div>
        </div>
        <div className="bg-slate-300 py-[32px] px-[32px] rounded-md mb-[16px] flex justify-between items-center max-md:flex-col">
          <div className="">
            <h4 className="text-[24px] font-medium font-sans">
              Fontend developer, with minimum of 5 years experience
            </h4>
            <p className="text-[16px] font-sans">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quibusdam suscipit pariatur similique labore. Facere iste dicta
              voluptas eaque quibusdam?
            </p>
          </div>
          <div>
            <Button  className="bg-[#0077b6] hover:bg-[#2a9d8f]">Apply</Button>
          </div>
        </div>
      </div>

      {/* === LATEST UPDATES */}
      <div className="my-[32px]">
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-medium font-roboto leading-normal">
            latest Updates
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full sm:w-2/3">
            <div className="flex mb-[16px] max-md:flex-col">
              <img
                src="/assets/images/update.jpg"
                alt=""
                className="w-[250px] h-[200px] max-md:w-full"
              />
              <div className="px-[16px]">
                <h2 className="font-sans leading-normal text-[16px] font-semibold hover:text-[#219ebc]">
                  Shortage workers in Bhutan
                </h2>
                <h4 className="text-[14px] pt-[8px]">February 10th, 2024</h4>
                <p className="line-clamp-4 text-[#717171] pt-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto incidunt cumque impedit vero repellendus architecto,
                  assumenda aperiam. Ipsum praesentium ipsa, officia suscipit
                  vel doloribus voluptatem quaerat quo? Repellendus, quidem
                  exercitationem.
                </p>
              </div>
            </div>
            <div className="border-l bg-gray-300 h-[2px] mr-[16px]"></div>
            <div className="flex my-[16px] max-md:flex-col">
              <img
                src="/assets/images/update.jpg"
                alt="news"
                className="w-[250px] h-[200px] max-md:w-full"
              />
              <div className="px-[16px]">
                <h2 className="font-sans leading-normal text-[16px] font-semibold hover:text-[#219ebc]">
                  Shortage workers in Bhutan
                </h2>
                <h4 className="text-[14px] pt-[8px]">February 10th, 2024</h4>
                <p className="line-clamp-4 text-[#717171] pt-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto incidunt cumque impedit vero repellendus architecto,
                  assumenda aperiam. Ipsum praesentium ipsa, officia suscipit
                  vel doloribus voluptatem quaerat quo? Repellendus, quidem
                  exercitationem.
                </p>
              </div>
            </div>
            <div className="border-l bg-gray-300 h-[2px] mr-[16px]"></div>
            <div className="flex my-[16px] max-md:flex-col">
              <img
                src="/assets/images/update.jpg"
                alt=""
                className="w-[250px] h-[200px] max-md:w-full"
              />
              <div className="px-[16px]">
                <h2 className="font-sans leading-normal text-[16px] font-semibold hover:text-[#219ebc]">
                  Shortage workers in Bhutan
                </h2>
                <h4 className="text-[14px] pt-[8px] font-sans">
                  February 10th, 2024
                </h4>
                <p className="line-clamp-4 text-[#717171] pt-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto incidunt cumque impedit vero repellendus architecto,
                  assumenda aperiam. Ipsum praesentium ipsa, officia suscipit
                  vel doloribus voluptatem quaerat quo? Repellendus, quidem
                  exercitationem.
                </p>
              </div>
            </div>
            <div className="border-l bg-gray-300 h-[2px] mr-[16px]"></div>
          </div>
          <hr className="w-[2px] rounded-md bg-gray-300 h-[690px] max-sm:hidden" />

          {/* Social icons sections */}
          <div className="w-full sm:w-1/3">
            <div className="px-[16px]">
              <div className="social_icons">
                <h1 className="font-sans text-light text-[16px] ">FOLLOW US</h1>
                <div className="border-l bg-gray-300 h-[2px]"></div>
                <div className="flex gap-[8px] my-[8px]">
                  <FaSquareFacebook className="w-[24px] h-[24px]" />
                  <p className="text-[16px] font-sans">FACEBOOK</p>
                </div>
                <div className="border-l bg-gray-300 h-[2px]"></div>
                <div className="flex gap-[8px] my-[8px]">
                  <FaInstagramSquare className="w-[24px] h-[24px]" />
                  <p className="text-[16px] font-sans">INSTRAGRAM</p>
                </div>
                <div className="border-l bg-gray-300 h-[3px]"></div>
                <div className="flex gap-[8px] my-[8px]">
                  <FaSquareTwitter className="w-[24px] h-[24px]" />
                  <p className="text-[16px] font-sans">TWITTER</p>
                </div>
              </div>

              <div>
                <button className="bg-btn py-[8px] px-[24px] rounded-md text-white font-sans my-[8px]">
                  Vacancy
                </button>
                {/* <p className="text-[14px] font-sans leading-[120%] line-clamp-4 mb-[8px] underline hover:cursor-pointer font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quis, sed. Veniam ducimus cum eum facilis adipisci delectus
                  vitae? Et voluptatem exercitationem laudantium ratione porro
                  sed quam aliquam obcaecati cumque dignissimos! Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Quis, sed.
                  Veniam ducimus cum eum facilis adipisci delectus vitae? Et
                  voluptatem exercitationem laudantium ratione porro sed quam
                  aliquam obcaecati cumque dignissimos!
                </p> */}
                {/* <p className="text-[14px] font-sans leading-[120%] line-clamp-4 underline hover:cursor-pointer font-semibold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quis, sed. Veniam ducimus cum eum facilis adipisci delectus
                  vitae? Et voluptatem exercitationem laudantium ratione porro
                  sed quam aliquam obcaecati cumque dignissimos! Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Quis, sed.
                  Veniam ducimus cum eum facilis adipisci delectus vitae? Et
                  voluptatem exercitationem laudantium ratione porro sed quam
                  aliquam obcaecati cumque dignissimos!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Vacancy;
