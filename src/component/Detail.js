import React from "react";

const Detail = () => {
  return (
    <div className="detail">
      <div className="detail-content">
        <img src="picture/a2.jpg" alt="" />
        <p className="p-name">Asssssssss</p>
        <p className="p-p">Price: 450000$</p>
        <p className="p-d">
          Có bộ tranh 4 mùa gồm 4 bức ,khổ 108 cm x 57 cm , dạng tranh vải khung
          tranh đẹp vững chắc mặt kính , còn khá đẹp - Đang để ở xưởng mộc nên
          nó dính bụi chỉ mang về lau sạch bụi là ngon lành ngay - Giá trên là
          tất cả 4 bức ,miễn phí ship loanh quanh khu vực nội thành hà nội,Quý
          khách liên hệ vào zalo để được gửi hình ảnh từng bức ( lưu ý không
          liên hệ qua Chát Trực tuyến được vì đang bị cắt)
        </p>
        <i class="fas fa-qrcode" id="i-detail">
          Tình trạng: Đã qua sử dụng
        </i>
        <i class="far fa-list-alt" id="i-detail">
          Loại sản phẩm: Các loại khác
        </i>
        <p className="address" id="i-detail">
          Khu vực
        </p>
        <i class="fas fa-map-marker-alt" id="i-detail">
          TP-HCM
        </i>
        <p id="i-detail">Chia sẻ tin đăng này cho bạn bè:</p>
        <div className="share-detail">
          <i class="fab fa-facebook-square" id="facebook"></i>
          <i class="fab fa-youtube" id="youtube"></i>
          <i class="fab fa-google-plus" id="gg"></i>
        </div>
      </div>
      <div className="detail-seller"></div>
    </div>
  );
};

export default Detail;
