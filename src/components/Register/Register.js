import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="login w-50 mx-auto">
        <h1 className="mb-4 text-center">Register</h1>
        <form onSubmit="">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <p className="mt-4">
            Already have an Account? <Link to="/login">Login</Link>
          </p>
          <div className="text-center">
            <button className="btn btn-primary">Register</button>

            <div>---------- Or ------------</div>
            <button className="btn btn-danger">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
