import React, { useEffect, useState } from "react";
import Image from "../assets/image2.jpg";
import Logo from "../assets/logo3.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-main">
      <div
        className="login-left"
        style={{
          width: "30%",
          height: "100vh",
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Vitajte naspäť!</h2>
            <p>prosím vyplňte svoje údaje</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">Zapamätať na 30 dní</label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Zabudli ste svoje heslo?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Prihlasiť sa</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Nemáte ešte účet? <a href="#">Kontaktujte nás</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
