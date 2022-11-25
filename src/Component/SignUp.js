import styled from "styled-components";
import "../App.css";

// const SignUpStyle = styled.div`
// .sign-up-wrapper {
// }
// .sign-up-body {
//   background-color: #fff;
//   position: absolute;
//   margin: auto;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   text-align: center;
//   width: 400px;
//   height: 520px;
//   border-radius: 10px;
// }
// .sign-up-form {
//   width: 235px;
//   padding: 40px;
//   margin: auto;
// }
// .sign-up-form-main div {
//   margin-bottom: 20px;
// }
// .sign-up-form-other div {
//   margin-bottom: 10px;
// }
// .sign-up-form-title {
//   font-size: 22px;
// }
// .sign-up-input {
//   font-size: 12px;
//   width: 235px;
//   height: 35px;
//   border: none;
//   border-bottom: 1px solid #000;
//   border-radius: 2px;
//   border-color: rgba(0, 0, 0, 0.243);
//   outline: none;
// }
// .sign-up button {
//   background-color: #1b2866;
//   border-radius: 3px;
//   color: #fff;
//   border: none;
//   width: 238px;
//   height: 35px;
// }
// .sign-up-form-help {
//   display: flex;
//   justify-content: space-between;

//   font-size: 11px;
//   font-weight: bold;
//   color: #1b2866cd;
// }
// `;
const SignUp = () => {
  return (
    <>
      <div className="sign-up-wrapper">
        <div className="sign-up-body">
          <div className="sign-up-holder-container">
            <div className="sign-up-holder-icon">icon</div>
            <div className="sign-up-holder">
              <div className="sign-up-holder-title">Let's get started !</div>
              <div className="sign-up-holder-subtitle">Sign Up now,</div>
            </div>
          </div>
          <div className="sign-up-form">
            <div className="sign-up-form-main">
              <div className="sign-up-form-title">Sign Up</div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="NAME"
                  name="password"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-id"
                  placeholder="ID"
                  name="sign-upId"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="PASSWORD"
                  name="password"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="PHONENUMBER"
                  name="password"
                />
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="EMAIL"
                  name="password"
                />
              </div>
              <div></div>
            </div>
            <div className="sign-up-form-other">
              <div className="sign-up">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
