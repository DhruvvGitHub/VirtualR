import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-5">
      <div className="container w-full h-[10vh] px-10 bg-black/5 backdrop-blur-xl flex items-center justify-between">
        <div className="logo w-[33%] flex items-center gap-3">
          <div className="logo_image w-9 h-9 flex items-center">
            <img src={logo} alt="" />
            <h3 className="text-2xl">VirtualR</h3>
          </div>
        </div>

        <div className="nav-items w-[33%] hidden  lg:flex gap-10 items-center">
          {navItems.map((item, index) => {
            return (
              <a key={index} href={item.label}>
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="buttons w-[33%] hidden lg:flex justify-end gap-5">
          <a href="#" className="p-3 border-2 border-white rounded-md">
            Sign In
          </a>
          <a
            href="#"
            className="p-3 rounded-md border-2 border-transparent bg-gradient-to-r from-orange-500 to-orange-800"
          >
            Create an account
          </a>
        </div>

        <div className="toggleButtons lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div style={{backgroundColor: "#121212"}} className="links flex flex-col items-center gap-5 lg:hidden py-5">
          {navItems.map((item, index) => {
            return (
              <a key={index} href="">
                {item.label}
              </a>
            );
          })}

          <div className="buttons w-full flex items-center justify-center gap-10">
          <a href="#" className="p-3 border-2 border-white rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="p-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>

          </div>
      )}
    </nav>
  );
};

export default Navbar;
