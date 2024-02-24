const Home = () => {
  return (
    <section>
      <div className="flex items-center justify-between max-md:flex-col">
        <div className="w-full flex justify-center items-center min-h-screen ">
          <div>
            <h2>This is the begining of newegde</h2>
            <p>descriptions</p>
            <button>button</button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center max-md:hidden">
          <img src="" alt="" />
          image should be here
        </div>
      </div>
      <div>trusted by</div>

      <section className=" justify-center items-center my-[32px]">
        <div className="flex justify-center items-center">
          <div>
            <h2>Why you should work with us?</h2>
            <p>Descriptions, this is the reason why</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full justify-center bg-green-400">
            <div className="flex justify-center items-center">
              <div>one</div>
              <div>two</div>
            </div>
            <div className="flex justify-center items-center">
              <div>one</div>
              <div>two</div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="">this should be the image</div>
          </div>
        </div>
      </section>
      <section className="my-[32px]">subscribe to our newsletter</section>
    </section>
  );
};

export default Home;
