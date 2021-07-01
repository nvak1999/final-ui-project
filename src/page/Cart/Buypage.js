import React from "react";
const BuyPage = () => {
  return <div className="buypage">
    <div className="content_address">
      <div className="subcontent_address1">
        <i class="fas fa-map-marker-alt"></i><h3>Địa Chỉ Nhận Hàng</h3>
      </div>
      
      <div className="subcontent_address2">
        <p>Tường Bảo</p>
        <p> (+84) 944146985 </p>
        <p>118/11 đường bạch đằng, Phường 24, Quận Bình Thạnh, TP. Hồ Chí Minh </p>
        <label >Mặc Định</label>
        <input type="button" value="THAY ĐỔI" />
      </div>
    </div>

    
    <div className="content_product1">
      <div className="subcontent_sanpham">
        <p>Sản phẩm</p>
      </div>
      <div>
        <p>Đơn Giá</p>  
      </div>
      <div>
        <p>Số Lượng</p>
      </div>
      <div>
        <p>Thành Tiền</p>
      </div>
    </div>

    <div className="content_product2">
      <div className="subcontent_detail">
        <img src="F:\IMAGE\EpmfHqYWwAA8Xba.jpg" alt="" width="64px" height="64px"></img>
        <a href="#">Dien thoai iphone 12 512GB mau den</a>
        <p>Mô tả: dung lượng: 512gb, màu sắc: đen</p>
      </div>
      <div>
        <p>23.000.000</p>
      </div>
      <div>
        <label htmlFor="">1</label>
      </div>
      <div>
        <p>23.000.000</p>
      </div>
    </div>

    <div className="content_product3">
      <div className="content_PTTT">
        <h3>Phương thức thanh toán</h3>
        <div>
          <p>Thanh toán khi nhận hàng</p>
        </div>

        <div>
          <input type="button" value="THAY ĐỔI" />
        </div>
      </div>

      <div className="content_detailPTTT">
        <div className="sub1">
          <p>Tổng tiền hàng</p><label htmlFor="">0đ</label>
        </div>
        <div className="sub2">
          <p>Phí vận chuyển</p><label htmlFor="">0đ</label>
        </div>
        <div className="sub3">
          <p>Tổng thanh toán</p><label htmlFor="">0d</label>
        </div>
      </div>
      <hr></hr>
      <div className="okbuy">
        <p>Nhấn "Đặt Hàng" đồng nghĩa với việc bạn đồ ý theo điều khoản của chúng tôi</p>
        <input type="button" value="Đặt Hàng" />
      </div>
    </div>
  </div>;
};

export default BuyPage;
