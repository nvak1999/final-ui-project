import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="header-content">
        <div className="header-box1">
          <h5>HỖ TRỢ KHÁCH HÀNG</h5>
          <p>Trung tâm trợ giúp</p>
          <p>An toàn mua bán</p>
          <p>Quy định cần biết</p>
          <p>Quy chế quyền riêng tư</p>
          <p>Liên hệ hỗ trợ</p>
        </div>
        <div className="header-box2">
          <h5>VỀ CHỢ TỐT</h5>
          <p>Giới thiệu</p>
          <p>Tuyển dụng</p>
          <p>Truyền thông</p>
          <p>Blog</p>
        </div>
        <div className="header-box3">
          <h5>Liên kết</h5>
          <i class="fab fa-facebook-square" id="facebook"></i>
          <i class="fab fa-youtube" id="youtube"></i>
          <i class="fab fa-google-plus" id="gg"></i>
        </div>
      </div>
      <p className="p-top">
        CÔNG TY TNHH CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point
        Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh
      </p>
      <p>
        Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu
        Tư TPHCM cấp ngày 11/01/2013
      </p>
      <p>Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041</p>
    </div>
  );
};

export default Footer;
