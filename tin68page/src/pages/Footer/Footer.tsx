import logoVuong from "images/logotin68.jpg";

import {
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-footer mt-3 ">
      <div className="layout-container flex flex-col justify-between items-center py-10 md:flex-row text-white leading-loose">
        <div className="">
          <img
            src={logoVuong}
            alt="#"
            className=" h-auto md:w-full w-[5rem] "
          />
        </div>
        <div className="text-center px-4 md:px-2">
          <p className="">
            Tin 68 – Nạp Đổi Đa Kênh Không Giới Hạn · Top Game Uy Tín & Tặng
            Code · Top 10 Game Đánh Bài Uy Tín · NỘI DUNG BẢN QUYỀN. Là một cổng
            game chuyên về những trò chơi giải trí cá cược đổi thưởng, Tin68 Me
            đã sử dụng cho mình những nền tảng công nghệ mới nhất của thời đại
            xã hội tiên .
          </p>
        </div>
        <div className=" flex gap-x-[20px] mx-2 ">
          <a href="">
            <AiOutlineTwitter className="text-[40px] text-sky-300 " />
          </a>
          <a href="">
            <AiFillFacebook className="text-[40px] text-blue-500 cursor-pointer" />
          </a>
          <a href="">
            <AiFillYoutube className="text-[40px] text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
