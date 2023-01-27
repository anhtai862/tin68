import playNow from "images/button_choi_truc_tiep.png";
import dowloadNow from "images/button_tai_ngay_file_apk.png";
import logInTin from "images/logintin68.png";
import hinh2 from "images/hinh2.jpg";
import hinh3 from "images/hinh3.jpg";

import hinhCuoi from "images/hihcuoi.jpg";
import hinhTai from "images/hinhtai.jpg";

import logo from "images/golololo68.jpg";

const Home = () => {
  return (
    <div className="">
      <section className="carousel-item">
        <div className="bg-header w-full gb-no-repeat bg-cover relative h-custom bg-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] z-10 text-white text-center">
            <h4 className="text-yellow-400 text-3xl mb-5 font-bold max-w-2xl md:leading-loose md:text-5xl ">
              Cổng Game Mới Ra, Đặc Biệt Hấp Dẫn - Sân Chơi Độc Nhất Vô Nhị - Uy
              Tín Xanh Chín
            </h4>
            <p className="text-lg md:text-xl mb-5 font-light ">
              Trải Nghiệm Và Tải Game Ngay Bên Dưới
            </p>
            <div className="flex flex-col  md:flex-row w-[15rem]  md:justify-center md:w-[42rem]">
              <a
                href="https://tin68doithuong.club/"
                className="text-center justify-center"
                target="_blank"
              >
                <img
                  className="m-4 w-[13rem]  "
                  src={playNow}
                  alt="Chơi Trực Tiếp"
                />
              </a>
              <a href="https://tin68doithuong.club/download/Tin68-production-20211229.apk">
                <img
                  className="m-4 w-[13rem] "
                  src={dowloadNow}
                  alt="Tải ngay File APK"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container">
        <div className="text-center">
          <h1 className="uppercase mt-6 mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
            Giới Thiệu Game Bài Tin68
          </h1>
          <p className="font-bold md:text-[18px] text-base">
            Tin68 - Một thiên đường cá cược đổi thưởng trực tuyến, nơi quy tụ
            những sản phẩm cá cược hấp dẫn hàng đầu trên thị trường. Ngoài ra
            cổng game này còn sở hữu rất nhiều điểm nổi trội mà các đối thủ
            không có, vậy những điểm nổi trội đó là gì?
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
            <div className="text-center mb-10">
              <img src={logInTin} alt="" />
            </div>
            <div className="text-center md:text-left leading-loose font-light max-w-sm mx-auto md:mx-2  ">
              <p className="font-bold">
                Tuy mới được ra mắt cách đây chưa lâu nhưng game bài Tin68 đã
                thu hút hàng nghìn lượt tải về mỗi ngày, cổng game này cũng được
                cấp giấy phép hoạt động kinh doanh hợp pháp bởi liên hội game
                bài và cá cược quốc tế. Như vậy thôi anh em đã đủ thấy độ uy tín
                của Tin68 lớn nhường nào.
              </p>
            </div>
          </div>
          <div className="text-center">
            <span className="font-bold md:text-[18px] text-base ">
              Hiện tại, game bài Tin68 đang cung cấp những sản phẩm hot hit nhất
              trên thị trường, mỗi sản phẩm lại có chất riêng đem đến sự hấp dẫn
              cho người chơi. Anh em muốn trải nghiệm thể loại dân gian có dân
              gian, muốn hiện đại có hiện đại, mọi mong muốn đều được đáp ứng
              hết tại Tin68. Không chỉ sở hữu những sản phẩm, dịch vụ chất
              lượng, người chơi còn được tận hưởng những ưu đãi hấp dẫn không
              nơi đâu có.
            </span>
          </div>
          <div className="text-center">
            <h1 className="uppercase mt-6 mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
              Những Trò Chơi có tại Tin68
            </h1>
            <p className="font-bold md:text-[18px] text-base">
              Tin68 - Một thiên đường cá cược đổi thưởng trực tuyến, nơi quy tụ
              những sản phẩm cá cược hấp dẫn hàng đầu trên thị trường. Ngoài ra
              cổng game này còn sở hữu rất nhiều điểm nổi trội mà các đối thủ
              không có, vậy những điểm nổi trội đó là gì?
            </p>
          </div>
          <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
            <div className=" text-center md:text-left leading-loose font-light max-w-sm mx-auto md:mx-2">
              <p className="font-bold md:text-[18px] text-base ">
                Tại đây có đầy đủ mọi thể loại game cho anh em giải trí, có thể
                kể đến những cái tên tiêu biểu như:
              </p>
              <ul className="list-disc mt-3 text-gray-500 ">
                <li className="">
                  Thể loại game đánh bài đổi thưởng: Tiến Lên Miền Nam, Sâm Lốc,
                  Phỏm, Ba Cây.
                </li>
                <li className="">
                  Thể loại game nổ hũ đổi thưởng: Panda Master, Thần Đèn,
                  Zombies, Wukong.
                </li>
                <li className="">
                  Thể loại Minigame đổi thưởng: Tài Xỉu, Kim Cương, Xổ Số, Thiên
                  Địa.
                </li>
              </ul>
            </div>

            <div className=" text-center">
              <img src={hinh2} alt="NHỮNG TRÒ CHƠI CÓ TẠI TIN68" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="uppercase mt-3 mb-3 font-bold text-yellow-500 md:text-2xl text-xl">
              Ưu nhược điểm game bài Tin68
            </h1>
            <span className="font-bold md:text-[18px] text-base">
              Đối với một sân chơi non trẻ như Tin68, những thành tích đạt được
              có thể nói là không ngờ tới, bởi chưa có 1 cổng game nào từng làm
              được điều đó. Thế mới thấy game bài Tin68 chất lượng đến nhường
              nào, có thể nói đây là sân chơi đổi thưởng có 1-0-2 trong lịch sử
              đổi thưởng.
            </span>
          </div>
          <div className="flex flex-col justify-evenly items-center py-5 md:flex-row">
            <img src={hinh3} alt="ƯU NHƯỢC ĐIỂM GAME BÀI TIN68" />
          </div>

          <div className="text-center leading-loose font-light mx-auto md:mx-2">
            <h1 className="uppercase mt-3 mb-3 font-bold text-yellow-500 md:text-2xl text-xl">
              Ưu điểm
            </h1>
            <p>
              Điểm ấn tượng đầu tiên của người chơi khi bước vào nổ hũ club
              Tin68 đó là giao diện thiết kế. Bố cục được sắp xếp logic, hình
              ảnh 4K sắc nét kết hợp với dàn âm thanh chuyển động theo nhân vật.
              Tất cả hài hòa với nhau, tạo ra một lối thiết kế đơn giản nhưng
              không kém phần hấp dẫn.
            </p>
            <p>
              Đến với game bài Tin68, anh em nên chuẩn bị tâm lý sẵn sàng để
              tránh bị bất ngờ quá mức, khi bước vào kho game của sân chơi này
              chắc chắn anh em không khỏi giật mình. Rất nhiều trò chơi khác
              nhau, đa dạng các thể loại trải khắp từ dân gian cho đến hiện đại,
              đảm bảo không có người chơi nào có thể trải nghiệm hết.
            </p>
            <p>
              Tại thị trường Việt Nam chưa cho phép hoạt động cá cược diễn ra,
              vì thế game bài Tin68 đã phải trang bị cho mình hệ thống bảo mật
              hiện đại bậc nhất. Ngay khi đăng ký tài khoản xong, thông tin
              khách hàng đã được mã hóa nhiều lớp, độ an toàn gần như là tuyệt
              đối, anh em có thể yên tâm cá cược rồi nhé.
            </p>
            <p>
              Với đội ngũ nhân viên chăm sóc khách hàng được lựa chọn và
              training kỹ càng, cổng game Tin68 cam kết với người chơi rằng luôn
              có nhân viên túc phối hợp giải quyết các vấn đề của khách thông
              qua Telegram, Fanpage và Hotline. Đây là 3 kênh để cho anh em liên
              hệ với bộ phận giải đáp thắc mắc, tìm kiếm câu trả lời nhanh nhất.
            </p>
            <p>
              Tin68 đã có kinh nghiệm trong việc tích hợp các phương thức nạp
              rút vào cổng game, vì vậy nhà phát hành đã cho nạp rút đa phương
              thức thông qua Đại lý, Ngân hàng, Thẻ cào. Các thao tác cũng khá
              đơn giản, dễ dàng, nhanh chóng cho người chơi sử dụng.
            </p>

            <h1 className="uppercase mt-6 mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
              Nhược Điểm
            </h1>
            <p>
              Khá bất ngờ là từ việc quá nhiều sản phẩm giải trí, nên nhiều
              người chơi thường kêu ca không biết lựa chọn trò chơi nào để tham
              gia cá cược. Vậy nên, đây vừa là ưu điểm mà cũng là nhược điểm,
              khiến người chơi đắn đo suy nghĩ không biết nên tham gia vào siêu
              phẩm nào.
            </p>
          </div>

          <div className="text-center">
            <h1 className="uppercase mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
              Hướng Dẫn Tải Tin68
            </h1>
            <span className="font-bold md:text-[18px] text-base">
              Là một cổng game hiện đại, cập nhật xu thế liên tục, vì vậy Tin68
              có mặt trên các nền tảng di động để tiếp cận tối đa mọi khách
              hàng. Anh em đã có thể trải nghiệm các tính năng của cổng game chỉ
              với một chiếc điện thoại có kết nối Internet.
            </span>
          </div>
          <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
            <img src={hinhTai} alt="hình ảnh tải" />
          </div>
          <div className="text-center leading-loose font-bold mx-auto md:mx-2">
            <h1 className="uppercase mt-6 mb-6  text-yellow-500 md:text-2xl text-xl">
              Hướng dẫn tải Tin68 (Android)
            </h1>
            <p>
              Bước 1: Truy cập Fanpage của cổng game và lấy đường link tải game
              đã được ghim.
            </p>
            <p>
              Bước 2: Mở đường link và click chọn “Phiên bản dành cho Android”.
            </p>
            <p>
              Bước 3: Chỉ mất từ 3-5 phút để game cài về máy, như vậy đã có thể
              mở lên trải nghiệm.
            </p>
            <h1 className="uppercase mt-6 mb-6 text-yellow-500 md:text-2xl text-xl">
              Hướng dẫn tải Tin68 iOS (iPhone)
            </h1>
            <p>
              Bước 1: Truy cập Fanpage của cổng game và lấy đường link tải game
              đã được ghim.
            </p>
            <p>
              Bước 2: Sau khi mở đường link, chọn “Phiên bản dành cho iOS”, hệ
              thống sẽ yêu cầu xác nhận mã khóa màn hình.
            </p>
            <p>
              Bước 3: Nhập mã xác nhận, sau khoảng 3-5 phút game sẽ được tải
              thành công.
            </p>
          </div>

          <div>
            <div className="text-center">
              <h1 className="uppercase mt-6 mb-6 font-bold text-yellow-500 md:text-2xl text-xl">
                Khuyến mãi tại game bài Tin68
              </h1>
              <p className="font-bold md:text-[18px] text-base">
                Với tiềm lực tài chính hùng hậu, nhà phát hành mạnh tay tung ra
                vô vàn những chương trình, sự kiện khuyến mãi hấp dẫn để tri ân
                người chơi cũ và thu hút người chơi mới. Rất nhiều người chơi đã
                làm giàu chỉ từ số vốn được Tin68 cấp ban đầu, anh em đã thấy
                kiếm tiền tại nổ hũ club Tin68 dễ dàng chưa.
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
              <div className="text-center">
                <img src={hinhCuoi} alt="Hình Khuyến Mãi" />
              </div>
              <div className="text-center md:text-left leading-loose font-light max-w-sm mx-auto md:mx-2 ">
                <ul className="list-disc text-gray-500 md:text-[18px] text-base  ">
                  <li>Đăng ký thành viên, nhận ngay quà khởi nghiệp.</li>
                  <li>Khuyến mãi 20% khi nạp qua Ngân hàng và MomoPay.</li>
                  <li>Tài Xỉu săn dây nhận iPhone 13.</li>
                  <li>Nhân hũ hàng ngày với các trò chơi Slots.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold md:text-[18px] text-base">
              Với những đánh giá trên anh em đã thấy game nổ hũ Tin68 hấp dẫn
              chưa nào, từ sản phẩm, dịch vụ cho đến chương trình khuyến mãi đều
              không chê vào đâu được. Nhanh tay tải Tin68 về thiết bị của mình
              để bắt đầu công cuộc làm giàu đi nhé.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
