// import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-between items-top max-md:flex-col px-[256px] max-xl:px-[32px] w-full bg-[#222766] py-[32px]">
        <div>
          {/* <img src="/assets/icons/logo.svg" alt="" /> */}
          <h4>logo</h4>
          <h3>congrats for being the frst person to be </h3>
        </div>
        <div>
          <h4 className="text-[24px] leading-normal font-roboto text-white">
            Customer support
          </h4>
          <div className="ml-[16px] text-[#717171] font-sans ">
            <p>Online support</p>
            <p>Policy & Privacy</p>
            <p>Terms & conditions</p>
          </div>
        </div>
        <div>
          <h4 className="text-[24px] leading-normal font-roboto text-white">
            Contact informations
          </h4>
          <div className="ml-[16px] text-[#717171] font-sans ">
            <p>2nd Floor, City mall, Chubachu, Thimphu, Bhutan</p>
            <p>Phone: 9758883028</p>
            <p>Email: info@newegde.bt</p>
            <p>Website: www.newedge.bt</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
