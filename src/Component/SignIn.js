import { useState } from "react";
const SignIn = () => {
  //local state
  const [inputValue, setInputValue] = useState({
    loginId: "",
    password: "",
  });
  const onChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    console.log(inputValue);
  };
  return (
    <>
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
                <span className="sign-up">SIGN UP</span>
                <span className="forgot-pw">FORGOT PASSWORD ?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
