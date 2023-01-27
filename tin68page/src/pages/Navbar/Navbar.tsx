import { useState } from "react";
import logo from "images/golololo68.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };
  return (
    <div className=" bg-navbar ">
      <div className="layout-container mx-auto px-4 ">
        <nav className="flex relative items-center justify-between py-[5px]">
          <div className="w-32 md:w-40 z-20">
            <img src={logo} alt="photo" />
          </div>

          <ul className=" hidden md:flex fixed z-30 top-0 left-0 w-full h-screen flex-col  items-center font-dm menu md:bg-transparent md:h-auto md:justify-end md:gap-x-[40px]  md:flex-row  md:static">
            <li className="m-12 md:m-0">
              <Link
                to={"/"}
                className=" text-black font-bold hover:text-yellow-500"
              >
                Trang Chủ
              </Link>
            </li>
            <li className="m-12 md:m-0">
              <Link
                to={"/huong-dan-nap-rut"}
                className="text-black font-bold hover:text-yellow-500"
              >
                Hướng Dẫn Nạp Rút
              </Link>
            </li>
            <li className="m-12 md:m-0">
              <Link
                to={"/"}
                className="text-black font-bold hover:text-yellow-500"
              >
                Hướng Dẫn Chơi
              </Link>
            </li>
            <li className="m-12 md:m-0">
              <Link
                to={"/review"}
                className="text-black font-bold hover:text-yellow-500"
              >
                Review
              </Link>
            </li>
          </ul>
          <div className="md:invisible">
            {openMenu ? (
              <div>
                <ul className=" fixed z-30 top-0 left-0 w-full h-screen flex flex-col justify-center items-center font-dm menu  bg-gray-500 bg-opacity-90 md:bg-transparent md:h-auto md:justify-end md:gap-x-[40px]  md:flex-row  md:static">
                  <li className="m-12 md:m-0">
                    <Link
                      to={"/"}
                      className=" text-black font-bold hover:text-yellow-500"
                      onClick={handleClose}
                    >
                      Trang Chủ
                    </Link>
                  </li>
                  <li className="m-12 md:m-0">
                    <Link
                      to={"/huong-dan-nap-rut"}
                      className="text-black font-bold hover:text-yellow-500"
                      onClick={handleClose}
                    >
                      Hướng Dẫn Nạp Rút
                    </Link>
                  </li>
                  <li className="m-12 md:m-0">
                    <Link
                      to={"/"}
                      className="text-black font-bold hover:text-yellow-500"
                      onClick={handleClose}
                    >
                      Hướng Dẫn Chơi
                    </Link>
                  </li>
                  <li className="m-12 md:m-0">
                    <Link
                      to={"/review"}
                      className="text-black font-bold hover:text-yellow-500"
                      onClick={handleClose}
                    >
                      Review
                    </Link>
                  </li>
                  <li className="m-15 md:invisible md:m-0 p-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 text-center">
                    <MdOutlineClose
                      size={"24px"}
                      className="cursor-pointer"
                      onClick={handleMenu}
                    />
                  </li>
                </ul>
              </div>
            ) : (
              <div className="m-15 md:invisible md:m-0 p-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500">
                <AiOutlineMenu
                  size={"24px"}
                  className="cursor-pointer"
                  onClick={handleMenu}
                />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
