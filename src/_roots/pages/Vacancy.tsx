const Vacancy = () => {
  return (
    <section>
      {/* should contain the background images defined for vancancy */}
      <div className="">
        <h2>Join our Team</h2>
        <p>
          This is your chance to prove to the world that you are better than
          anyone
        </p>
      </div>

      <div className="flex justify-center items-center">
        <h2>Vacancy</h2>
      </div>
      <div className="">
        <div>Fontend developer needed urgently for requirement</div>
        <div>Database engineers are needed</div>
        <div>Senior developer required with min of 8years experience</div>
      </div>
      {/* === LATEST UPDATES */}
      <div className="my-[32px]">
        <div className="flex justify-center items-center">
          <h2>latest Updates</h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full">First ddiv</div>
          <div className="w-full">
            <div>second div</div>
            <div>Third div</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;
