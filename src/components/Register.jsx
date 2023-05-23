import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img className="w-100" src="./images/login.jpg" alt="images" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-5">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form className="">
            <div className="form-group py-3">
              <label for="exampleFormControlInput1">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ehtisham Ali"
              />
            </div>
            <div className="form-group py-3">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group py-3">
              <label for="exampleFormControlInput1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="password"
              />
            </div>
            <div className="form-group py-3">
              <label for="exampleFormControlInput1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="password"
              />
            </div>
            <input type="submit" value="Login" className="btn btn-dark" />
            <p className="my-3">
              Already have account? <Link to="/">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
