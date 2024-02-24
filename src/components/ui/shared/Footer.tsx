// import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-top max-md:flex-col max-md:mx-[32px] mx-[256px]">
        <div>
          {/* <img src="/assets/icons/logo.svg" alt="" /> */}
          <h4>logo</h4>
          <h3>congrats for being the frst person to be </h3>
        </div>
        <div>
          <h4>Customer support</h4>
          <div className="ml-[16px]">
            <p>Online support</p>
            <p>Policy & Privacy</p>
            <p>Terms & conditions</p>
          </div>
        </div>
        <div>
          <h4>Contact informations</h4>
          <div className="ml-[16px]">
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
