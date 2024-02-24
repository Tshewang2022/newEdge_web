import { navLinks } from "@/constants";
import { GiHamburgerMenu } from "react-icons/gi";
// import { IoPersonAdd } from "react-icons/io5";
// import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="bg-white py-[10px] border-[2px] w-full">
      <div className="flex justify-between items-center mx-[32px] sm:mx-[64px]">
        {/* logo */}
        <img
          src="/assets/icons/logo.svg"
          alt="logo"
          className="w-[100px] h-[40px] md:w-[140px] md:h-[50px]"
        />

        {/* items for the menu */}
        <ul className="flex flex-1 justify-end px-[32px] items-center gap-[32px] max-md:hidden text-md font-roboto">
          {navLinks.map((link) => {
            const isActive = pathname == link.route;
            return (
              <li key={link.label}>
                <NavLink
                  to={link.route}
                  className={`${
                    isActive && "bg-blue-500 px-[10px] py-[10px] rounded-md"
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex hidden max-md:block justify-end item-center flex-end">
          <button onClick={toggle} className="sm:flex">
            <span className="sr-only">open</span>
            {open === false ? (
              <GiHamburgerMenu className="w-[24px] h-[24px]" />
            ) : (
              <IoMdClose className="w-[24px] h-[24px]" />
            )}
          </button>
        </div>
        {open ? (
          <div className="hidden max-md:block absolute top-[40px] right-[32px] rounded-md border-[2px] bg-[#F2F1F1] ">
            {/* <div className="flex item-center justify-center hover:cursor-pointer hover:bg-[#717171] w-[40px] h-[40px] rounded-full border-[1px] ml-[140px] mt-[8px] mb-[8px] items-center">
              <Link to="./sign-in">
                <IoPersonAdd className="w-[24px] h-[24px]" />
              </Link>
            </div> */}
            <hr className="bg-gray-700 h-[2px] w-full border-[1px]" />
            <ul className="rounded-md  px-[32px] py-[16px] text-md font-roboto h-[216px] space-y-[8px]">
              {navLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                  <li key={link.label}>
                    <NavLink
                      to={link.route}
                      className={`${isActive && " underline rounded-md "}`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {/* setting the toggle menu inside */}

        {/* <div className="flex max-md:hidden">
          <div className="flex h-[46px] border-[2px] border-green-900 items-center px-[10px] gap-[8px] rounded-full">
            <Link to="/sign-up">
              <IoPersonAdd className="justify-center items-center w-[24px] h-[24px] hover:bg-[#717171] hover:cursor-pointer rounded-full" />
            </Link>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
