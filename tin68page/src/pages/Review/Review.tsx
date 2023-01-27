import logoVuong from "images/logotin68.jpg";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="text-center">
      <h1 className="uppercase mt-6 mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
        REVIEW
      </h1>
      <div className="layout-container drop-shadow-2xl shadow-lg shadow-indigo-500/40 flex flex-col justify-between items-center py-10 md:flex-row text-white leading-loose">
        <div>
          <img src={logoVuong} alt="" className="h-auto md:w-[8rem] w-[5rem]" />
        </div>
        <div>
          <span className="text-center px-4 md:px-2 font-bold text-gray-500">
            Tin68 Me - Cổng Game Mới Ra, Đặc Biệt Hấp Dẫn - Sân Chơi Độc Nhất Vô
            Nhị - Uy Tín Xanh Chín
          </span>
        </div>
        <br className="w-1 h-1 text-red-500" />
        <div className="flex gap-x-[20px] mx-2 ">
          <AiFillStar className="text-2xl text-yellow-500" />
          <AiFillStar className="text-2xl text-yellow-500" />
          <AiFillStar className="text-2xl text-yellow-500" />
          <AiFillStar className="text-2xl text-yellow-500" />
          <AiFillStar className="text-2xl text-yellow-500" />
        </div>
        <br />
        <div className="flex  justify-center">
          <a href="https://tin68doithuong.club/">
            <button className="mx-4 border border-transparent bg-gradient-to-r from-red-500 to-yellow-500 px-10 py-3 rounded-full hover:bg-transparent hover:border-white transition-all">
              Chơi Ngay
            </button>
          </a>
          <>
            <Link
              to={"/"}
              className="mx-4 border border-white bg-gray-400 px-10 py-3 rounded-full hover:border-transparent hover:bg-gradient-to-r from-red-500 to-yellow-500 transition-all"
            >
              Xem review
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default Review;
