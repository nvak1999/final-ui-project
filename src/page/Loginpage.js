import React from "react";

const Loginpage = () => {
  return <div class = "login">
    <form action = "">
      <h2>Đăng nhập</h2>
      <input type ="text" name ="login" placeholder = "Nhập SĐT của bạn"></input>
      <input type = "password" name="password" placeholder="Nhập mật khẩu của bạn"></input>
      <button type="button">Đăng nhập</button>
      <a href="">Bạn quên mật khẩu?</a>
      <p>hoặc sử dụng</p>
      <div>chèn api login MXH</div>
      <p>Chưa có tài khoản? <a href="">Đăng ký ngay</a></p>
    </form>
  </div>;
};
export default Loginpage;
