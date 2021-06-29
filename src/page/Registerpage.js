import React from "react";

const Registerpage = () => {
  return <div className="register"><form action = "">
  <h2>Đăng ký</h2>
  <p>Tạo tài khoản ngay</p>
  <input type ="text" name ="login" placeholder = "Nhập SĐT của bạn"></input>
  <input type = "password" name="password" placeholder="Tạo mật khẩu có ít nhất 6 kí tự"></input>
  <button type="button">Đăng ký</button>
  <p>Bằng việc Đăng ký, bạn đã đồng ý với <a href="">Điều khoản sử dụng của chúng tôi</a></p> 
  <p>hoặc sử dụng</p>
  <div>chèn api login MXH</div>
  <p>Bạn đã có tài khoản? <a href="">Đăng nhập</a></p>
</form></div>;
};

export default Registerpage;
