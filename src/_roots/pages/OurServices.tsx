const OurServices = () => {
  return (
    <section>
      <div className=" items-center my-[32px]">
        {/* their should be the images as the background */}
        <h2>Our Services</h2>
        <p>Descriptions</p>
        <button>Lear more</button>
      </div>
      <div>
        {/* === OUR SERVICES === */}
        <div className="flex justify-center items-center">
          <h2>Services</h2>
        </div>
        <div className="flex justify-between item-center">
          <div>
            <img src="" alt="" />
            icons
            <h4>Title</h4>
            <p>description</p>
          </div>
          <div>
            <img src="" alt="" />
            icons
            <h4>Title</h4>
            <p>description</p>
          </div>
          <div>
            <img src="" alt="" />
            icons
            <h4>Title</h4>
            <p>description</p>
          </div>
          <div>
            <img src="" alt="" />
            icons
            <h4>Title</h4>
            <p>description</p>
          </div>
        </div>
        <div className="my-[32px]">
          <div className="flex justify-center items-center">
            <h2>Want to colloborate with us?</h2>
          </div>
          <div className="flex justify-between items-center">
            <div>The contact sections</div>
            <div>
              <div>the image sections</div>
              <p>The description of the image section</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
