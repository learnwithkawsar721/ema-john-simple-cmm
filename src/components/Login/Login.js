import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";
  const hendelGoogleSingIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };
  return (
    <div className="login w-50 mx-auto">
      <h1 className="mb-4 text-center">Login</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <p className="mt-4">
          new to ema-jon <Link to="/register">Create Account</Link>
        </p>
        <div className="text-center">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center">
        <div>---------- Or ------------</div>
        <button onClick={hendelGoogleSingIn} className="btn btn-danger">
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
