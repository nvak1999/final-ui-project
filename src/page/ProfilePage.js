import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const ProfilePage = () => {
  return (
    <div>
      <Header></Header>
      <div className="form-profile1">
        <h3>Hồ sơ của tôi</h3>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>

      <div className="form-profile">
        <div>
          <div className="value-profile">
            <label htmlFor="">Tên Đăng Nhập</label>
            <input type="text" placeholder="aj0k2w0fwa" />
          </div>
          <div className="value-profile">
            <label htmlFor="">Tên</label>
            <input type="text" placeholder="Khương" />
          </div>
          <div className="value-profile">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="nguyenvuaKhuong@gmail.com" />
          </div>
          <div className="value-profile">
            <label htmlFor="">Số điện thoại</label>
            <input type="text" placeholder="0338408533" />
          </div>
          <div className="value-profile">
            <label htmlFor="">Địa chỉ</label>
            <input type="text" placeholder="TP-HCM" />
          </div>

          <div className="value-profile" id="sex">
            <label for="">Giới tính</label>
            <input
              type="radio"
              id="html"
              name="fav_language"
              value="HTML"
            /> {" "}
            <label for="html" id="sex-label">
              Nam
            </label>
            <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
            <label for="html" id="sex-label">
              Nữ
            </label>
            <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
            <label for="html" id="sex-label">
              Khác
            </label>
          </div>
          <div className="value-profile">
            <label for="cars">Ngày sinh</label>
            <select id="cars" name="cars">
              <option value="volvo">Ngày</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="fiat">3</option>
              <option value="audi">4</option>
              <option value="volvo">5</option>
              <option value="saab">6</option>
              <option value="fiat">7</option>
              <option value="audi">8</option>
              <option value="volvo">9</option>
              <option value="saab">10</option>
              <option value="fiat">11</option>
              <option value="audi">12</option>
              <option value="volvo">13</option>
              <option value="saab">14</option>
              <option value="fiat">15</option>
              <option value="audi">16</option>
              <option value="volvo">17</option>
              <option value="saab">18</option>
              <option value="fiat">19</option>
              <option value="audi">20</option>
              <option value="volvo">21</option>
              <option value="saab">22</option>
              <option value="fiat">23</option>
              <option value="audi">24</option>
              <option value="volvo">25</option>
              <option value="saab">26</option>
              <option value="fiat">27</option>
              <option value="audi">28</option>
              <option value="volvo">29</option>
              <option value="saab">30</option>
              <option value="fiat">31</option>
            </select>
            <select id="cars" name="cars">
              <option value="volvo">Tháng</option>
              <option value="saab">1</option>
              <option value="fiat">2</option>
              <option value="audi">3</option>
              <option value="saab">4</option>
              <option value="fiat">5</option>
              <option value="audi">6</option>
              <option value="saab">7</option>
              <option value="fiat">8</option>
              <option value="audi">9</option>
              <option value="saab">10</option>
              <option value="fiat">11</option>
              <option value="audi">12</option>
            </select>
            <select id="cars" name="cars">
              <option value="volvo">Năm</option>
              <option value="saab">1990</option>
              <option value="saab">1991</option>
              <option value="saab">1992</option>
              <option value="saab">1993</option>
              <option value="saab">1994</option>
              <option value="saab">1995</option>
              <option value="saab">1996</option>
              <option value="saab">1997</option>
              <option value="saab">1998</option>
              <option value="saab">1999</option>
              <option value="saab">2000</option>
              <option value="saab">2001</option>
              <option value="saab">2002</option>
              <option value="saab">2003</option>
              <option value="saab">2004</option>
              <option value="saab">2005</option>
              <option value="saab">2006</option>
              <option value="saab">2007</option>
              <option value="saab">2008</option>
              <option value="saab">2009</option>
              <option value="saab">2010</option>
              <option value="saab">2011</option>
            </select>
          </div>
        </div>
        <div className="img-profile">
          <img src="picture/a2.jpg" alt="" />
          <input type="file" />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
