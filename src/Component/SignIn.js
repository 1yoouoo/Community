import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignInStyle = styled.div`
  .login-wrapper {
  }
  .login-body {
    background-color: #fff;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 350px;
    height: 320px;
    border-radius: 10px;
    box-shadow: 2px 2px 30px rgba(217, 217, 217, 0.451);
  }
  .login-form {
    width: 235px;
    padding: 40px;
    margin: auto;
  }
  .login-form-main div {
    margin-bottom: 20px;
  }
  .login-form-other div {
    margin-bottom: 10px;
  }
  .login-form-title {
    font-size: 22px;
  }
  .login-input {
    font-size: 12px;
    width: 235px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #000;
    border-radius: 2px;
    border-color: rgba(0, 0, 0, 0.243);
    outline: none;
  }
  .sign-in button {
    background-color: #1b2866;
    border-radius: 3px;
    color: #fff;
    border: none;
    width: 238px;
    height: 35px;
  }
  .login-form-help {
    display: flex;
    justify-content: space-between;

    font-size: 11px;
    font-weight: bold;
    color: #1b2866cd;
  }
`;

const SignIn = () => {
  //local state
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    loginId: "",
    password: "",
  });
  function onChange(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(inputValue);
  }

  function onClickSignUp() {
    navigate("/SignUp");
  }
  return (
    <>
      <SignInStyle>
        <div className="login-wrapper">
          <div className="login-body">
            <div className="login-form">
              <div className="login-form-main">
                <div className="login-form-title">Great to see you again !</div>
                <div>
                  <input
                    className="login-input login-input-id"
                    placeholder="ID"
                    name="loginId"
                    value={inputValue.loginId}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <input
                    className="login-input login-input-pw"
                    placeholder="PASSWORD"
                    value={inputValue.password}
                    name="password"
                    onChange={onChange}
                  />
                </div>
                <div></div>
              </div>
              <div className="login-form-other">
                <div className="sign-in">
                  <button>Sign in</button>
                </div>
                <div className="login-form-help">
                  <span className="sign-up" onClick={onClickSignUp}>
                    SIGN UP
                  </span>
                  <span className="forgot-pw">FORGOT PASSWORD ?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignInStyle>
    </>
  );
};

export default SignIn;
