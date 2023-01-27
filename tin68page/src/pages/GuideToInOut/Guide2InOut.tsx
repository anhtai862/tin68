import React from "react";
import napTien from "images/naptien.jpg";
import rutTien from "images/rut.jpg";

const Guide2InOut = () => {
  return (
    <div className="layout-container">
      <div>
        <div className="text-center">
          <h1 className="uppercase mt-6 mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
            Hướng Dẫn Nạp Rút Tin68
          </h1>
          <p className="font-bold md:text-[18px] text-base">
            Cách thức nạp rút tại Tin68 đổi thưởng cực kỳ đơn giản, dù bạn là
            người chơi lớn tuổi hay trẻ tuổi thì cũng đều có thể thực hiện được.
            Tuy nhiên, anh em Tân thủ nên tham khảo hướng dẫn dưới đây trước khi
            giao dịch lần đầu nhé.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-evenly items-center py-5 md:flex-row">
          <div className="text-center mb-10">
            <img src={napTien} alt="Hướng Dẫn Nạp Tiền" />
          </div>
          <div className="text-center md:text-left leading-loose font-light max-w-sm mx-auto md:mx-2  ">
            <span className="font-bold md:text-[18px] text-base">
              Hướng Dẫn Nạp Tiền
            </span>
            <ul className="list-disc text-gray-500 mt-3 ">
              <li>
                Bước 1: Đăng nhập game, chọn dấu “+” màu vàng bên cạnh số dư.
              </li>
              <li>
                Bước 2: Chọn hình thức nạp tiền mà bạn có như Ngân hàng,
                MomoPay, Đại lý, Thẻ cào.
              </li>
              <li>
                Bước 3: Bước 3: Cung cấp thông tin theo hướng dẫn và xác nhận
                “Nạp tiền”, tiền sẽ được cộng vào tài khoản ngay lập tức.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center py-5 md:flex-row">
        <div className=" text-center md:text-left leading-loose font-light max-w-sm mx-auto md:mx-2">
          <p className="font-bold md:text-[18px] text-base ">
            Hướng Dẫn Rút Tiền
          </p>
          <ul className="list-disc mt-3 text-gray-500 ">
            <li className="">
              Bước 1: Đi đến trang chủ game, chọn mục “Rút tiền” trên giao diện.
            </li>
            <li className="">
              Bước 2: Chọn hình thức rút tiền hiện có như Ngân hàng, Thẻ cào,
              sau đó cũng cấp thông tin theo hướng dẫn.
            </li>
            <li className="">
              Bước 3: Xác nhận “Rút tiền” để hệ thống xử lý, giao dịch hoàn tất
              trong khoảng 2-3 phút.
            </li>
          </ul>
        </div>

        <div className=" text-center mb-5">
          <img src={rutTien} alt="Hướng Dẫn rút tiền" />
        </div>
      </div>
    </div>
  );
};

export default Guide2InOut;
