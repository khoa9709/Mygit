import "./LoginPage.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/utils";
export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="window d-flex align-items-center justify-content-center">
      <div className="login-body d-flex">
        <div className="form-login-container">
          <div style={{ fontsize: 28, fontWeight: 600 }}>Login</div>
          <div style={{ color: "#ACACAC" }}>
            Doesn't have an account yet?{" "}
            <a
              style={{
                color: "#AA8DB3",
                fontWeight: 500,
                textDecoration: "underlive",
                cursor: "pointer",
              }}
            >
              Sign up!
            </a>
          </div>
          <div className="mt-5">
            <label form="input-user" class="form-label">
              User Name or Email
            </label>
            <input type="text" id="input-user" class="form-control" />
            <label form="input-user" class="form-label">
              Password
            </label>
            <input type="text" id="input-user" class="form-control" />
            <div className="mt-2">
              <input type="checkbox" />
              <span className="ms-2">Remember me!</span>
            </div>
            <div className="d-flex justify-content-center">
              <button
                class="btn mt-3"
                style={{
                  background: "#dcc6f9",
                  width: "100%",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                Login
              </button>
            </div>
            <div className="d-flex">
              <hr className="w-100" />
              <div className="mx-1" style={{ whiteSpace: "nowrap" }}>
                or login with
              </div>
              <hr className="w-100" />
            </div>
            <div className="d-flex">
              <div className="w-50">
                <button className="btn w-100 social-btn">
                  <FcGoogle />
                </button>
              </div>
              <div className="w-50">
                <button className="btn w-100 social-btn">
                  <FaFacebookF />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="login-background ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnFh2A1B9Md4SQ4kAWXRQ3PyOsDgSvpFoNA&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
