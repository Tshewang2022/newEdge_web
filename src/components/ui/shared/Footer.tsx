// import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="">
      <div className="flex justify-between items-top max-md:flex-col px-[256px] max-xl:px-[32px] w-full bg-[#222766] py-[32px]">
        <div>
          <img src="/assets/icons/logo.png" alt="" />
          {/* <h4>logo</h4>
          <h3>congrats for being the frst person to be </h3> */}
        </div>
        <div>
          <h4 className="text-[24px] leading-normal font-roboto text-white">
            Customer support
          </h4>
          <div className="ml-[16px] text-white font-sans mt-[1rem] hover:text-blue">
            <p className="hover:text-[#90e0ef]">Online support</p>
            <p className="mt-[0.5rem] hover:text-[#90e0ef]">Policy & Privacy</p>
            <p className="mt-[0.5rem] hover:text-[#90e0ef]">Terms & conditions</p>
          </div>
        </div>
        <div>
          <h4 className="text-[24px] leading-normal font-roboto text-white">
            Contact informations
          </h4>
          <div className="ml-[16px] text-white font-sans mt-[1rem]">
            <p className="hover:text-[#90e0ef]">2nd Floor, City mall, Chubachu, Thimphu, Bhutan</p>
            <p className="mt-[0.5rem] hover:text-[#90e0ef]">Phone: 9758883028</p>
            <p className="mt-[0.5rem] hover:text-[#90e0ef]">Email: info@newegde.bt</p>
            <p className="mt-[0.5rem] hover:text-[#90e0ef]"> Website: www.newedge.bt</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
