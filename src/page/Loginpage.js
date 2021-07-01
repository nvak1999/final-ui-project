import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
const Loginpage = () => {
  return (
    <div>
      <Header></Header>
      <div class="login">
        <form action="">
          <h2>Đăng nhập</h2>
          <input
            type="text"
            name="login"
            placeholder="Nhập SĐT của bạn"></input>
          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu của bạn"></input>
          <button type="button">Đăng nhập</button>
          <a href="">Bạn quên mật khẩu?</a>
          <p>hoặc sử dụng</p>
          <div>chèn api login MXH</div>
          <p>
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </p>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Loginpage;
