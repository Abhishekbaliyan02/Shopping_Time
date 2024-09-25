import React, { useState } from "react";
import "./Shopping.css";

export const Login = () => {
  let [Account, setAccount] = useState(false);

  return (
    <div className="login">
      <h4>{Account == false ? "Sign Up!" : "Welcome Back!"}</h4>
      <div className="heading">
        {Account == false ? "Create Account" : "Log In"}
      </div>
      <div className="loginform">
        <form action="">
          <div class="form-floating">
            <input
              type="text"
              class="form-control label1"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Name</label>
          </div>

          {Account == false ? (
            <>
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control label1"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
            </>
          ) : (
            <div></div>
          )}

          <div class="form-floating">
            <input
              type="password"
              class="form-control label1"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          {Account == false ? (
            <></>
          ) : (
            <a href="" className="forgetbtn">
              Forget Password?
            </a>
          )}
        </form>
      </div>
      <button className="loginbtn">
        {Account == false ? "SIGN UP" : "LOGIN"}
      </button>
      <br />
      <button
        onClick={() => {
          setAccount(!Account);
        }}
        className="loginbtn"
      >
        {Account == false ? "Have an Account?" : "Create an Account"}
      </button>
    </div>
  );
};
