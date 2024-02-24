const AboutUs = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <img src="#" alt="" />
        <h2>About NewEdge</h2>
      </div>
      <div className="my-[32px] flex justify-between items-center gap-[32px]">
        <div className="w-1/3">about mission and vison of the company</div>
        <div
          className="w-[2px] bg-green-400 h-[40px]
        "
        />
        <div className="w-2/3">The description about the company mission</div>
      </div>
      <div>
        <div className="flex justify-center items-center">
          <h2>Meet our Team</h2>
        </div>
        <div>
          {/* === BOARD OF DIRECTORS */}
          <div className="my-[32px]">
            <h4>Board of Directors</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
              <div className="bg-green-400">one</div>
            </div>
          </div>

          {/* === SOFTWARE TEAM */}
          <div className="my-[32px]">
            <h4>Software Team</h4>
            <div className="grid grid-cols-3 gap-4">
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
