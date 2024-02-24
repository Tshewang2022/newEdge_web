import { Button } from "@/components/ui/button";

const Vacancy = () => {
  return (
    <section className="mx-[256px] max-xl:mx-[32px]">
      {/* should contain the background images defined for vancancy */}
      <div
        className="h-[640px] bg-no-repeat bg-cover bg-center flex items-center mb-[64px]"
        style={{ backgroundImage: `url('/assets/images/team.jpg')` }}
      >
        <div className="px-[32px]">
          <h2 className="text-[46px] font-bold text-white">Join our Team</h2>
          <p className="text-white">
            Our team has amazing culture and awesome people that <br /> we need
            to have in the country for the love of the people
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-[16px]">
        <h2 className="text-[32px] leading-normal font-medium">Vacancy</h2>
      </div>
      <div className="">
        <div className="bg-slate-300 py-[32px] px-[32px] rounded-md mb-[16px] flex justify-between items-center">
          <div>
            <h4 className="text-[24px] font-medium">
              Fontend developer, with minimum of 5 years experience
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quibusdam suscipit pariatur similique labore. Facere iste dicta
              voluptas eaque quibusdam?
            </p>
            <p>Type of employment</p>
          </div>
          <div>
            <Button>Apply</Button>
          </div>
        </div>
        <div className="bg-slate-300 py-[32px] px-[32px] rounded-md mb-[16px] flex justify-between items-center">
          <div>
            <h4 className="text-[24px] font-medium">
              Fontend developer, with minimum of 5 years experience
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quibusdam suscipit pariatur similique labore. Facere iste dicta
              voluptas eaque quibusdam?
            </p>
            <p>Type of employment</p>
          </div>
          <div>
            <Button>Apply</Button>
          </div>
        </div>
        <div className="bg-slate-300 py-[32px] px-[32px] rounded-md mb-[16px] flex justify-between items-center">
          <div>
            <h4 className="text-[24px] font-medium">
              Fontend developer, with minimum of 5 years experience
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              quibusdam suscipit pariatur similique labore. Facere iste dicta
              voluptas eaque quibusdam?
            </p>
            <p>Type of employment</p>
          </div>
          <div>
            <Button>Apply</Button>
          </div>
        </div>
      </div>
      {/* === LATEST UPDATES */}
      <div className="my-[32px]">
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-semibold">latest Updates</h2>
        </div>
        <div className="flex justify-between items-center gap-[16px]">
          <div className="w-full">
            <h4>The section is the seconds</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              expedita, fugiat error, aliquid repellat perferendis harum
              explicabo in libero quasi autem ex iure corrupti ducimus
              cupiditate ad voluptatibus nesciunt enim. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Vel eveniet exercitationem
            </p>
            <img src="/assets/images/data.jpg" alt="" />
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ab nemo velit amet, autem reiciendis incidunt enim
                  ea nam molestias! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quod delectus, quis dolorem temporibus
                </p>
              </div>
              <div>
                <img src="/assets/images/ux.png" alt="" className="w-[200px]" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates ab nemo velit amet, autem reiciendis incidunt enim
                  ea nam molestias! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Reiciendis ab recusandae molestias,
                </p>
              </div>
              <div>
                <img src="/assets/images/ux.png" alt="" className="w-[200px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;
