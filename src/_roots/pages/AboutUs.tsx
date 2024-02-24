const AboutUs = () => {
  return (
    <section className="mx-[256px] max-xl:mx-[32px]">
      <div
        className="bg-cover bg-center bg-no-repeat h-[640px] flex justify-center items-center opacity-1"
        style={{ backgroundImage: `url('/assets/images/technology.jpg')` }}
      >
        <div className="flex justify-center items-center">
          <h2 className="text-[56px] font-bold leading-normal">
            About Newedge
          </h2>
        </div>
      </div>
      <div className="my-[32px] flex justify-between items-center gap-[32px]">
        <div className="w-1/3 flex justify-center items-center">
          <div className="">
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
          className="w-[2px] bg-green-400 h-[150px]
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
      </div>
      <div className="my-[64px]">
        <div className="flex justify-center items-center">
          <h2 className="text-[32px] font-semibold">Meet our Team</h2>
        </div>
        <div>
          {/* === BOARD OF DIRECTORS */}
          <div className="my-[32px]">
            <h4 className="text-[24px] font-medium">Board of Directors</h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-green-400 p-[16px]">
                <div className="flex justify-center items-center">
                  <img src="" alt="" />
                  image
                </div>
                <p>name</p>
                <p>position</p>
                <div className="flex justify-center items-center">
                  <p>fb</p>
                  <p>linkedin</p>
                  <p>twitter</p>
                </div>
              </div>
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
            </div>
          </div>

          {/* === SOFTWARE TEAM */}
          <div className="my-[32px]">
            <h4>Software Team</h4>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
