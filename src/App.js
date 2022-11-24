import "./App.css";

function App() {
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
                  placeholder="USERNAME"
                />
              </div>
              <div>
                <input
                  className="login-input login-input-pw"
                  placeholder="PASSWORD"
                />
              </div>
              <div></div>
            </div>
            <div className="login-form-other">
              <div className="Signin">
                <button>Sign in</button>
              </div>
              <div className="login-form-help">
                <span className="Signup">SIGN UP</span>
                <span className="forgotpw">FORGOT PASSWORD ?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
