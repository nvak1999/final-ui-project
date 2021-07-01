import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mother-div">
      <div className="header">
        <div className="header-top">
          <Link to="/" className="Link">
            <img src="picture/WEB13.png" alt="" />
          </Link>
          <div className="item-top">
            <Link className="Link">
              <div className="item">
                <i class="fas fa-home"></i>
                <p>Trang chủ</p>
              </div>
            </Link>
            <Link className="Link">
              <div className="item">
                <i class="far fa-laugh-beam"></i>
                <p>Quản lí tin</p>
              </div>
            </Link>
            <Link className="Link">
              <div className="item">
                <i class="far fa-bell"></i>
                <p>Thông báo</p>
              </div>
            </Link>
            <Link className="Link">
              <div className="item" id="hover-add">
                <i class="far fa-plus-square"></i>
                <p className="hover-content">Thêm</p>
                <div class="dropdown-content">
                  <Link to="/profile" className="Link">
                    <p>Xem trang cá nhân</p>
                  </Link>
                  <Link className="Link">
                    <p>Khuyến mải</p>
                  </Link>
                  <Link className="Link">
                    <p>Đăng xuất</p>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="header-bottom">
          <div className="search">
            <input type="text" placeholder="Tìm kiếm trên chợ tốt" />
            <p>
              <i class="fas fa-search"></i>
            </p>
          </div>
          <div className="button-header">
            <Link to="/login" className="Link">
              <div className="button-login">
                <i class="fas fa-user"></i>
                <p>Đăng nhập</p>
              </div>
            </Link>
            <Link to="/cart" className="Link">
              <div className="button-cart">
                <i class="fas fa-cart-plus"></i>
                <p>Giỏ hàng</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
