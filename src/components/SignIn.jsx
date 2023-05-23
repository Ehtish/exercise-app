import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const backgoundImage = {
    backgoundImage: "url('../images/login.jpg')",
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-12 justify-content-center"
          style={{ backgoundImage }}
        >
          {/* <img
            className=""
            style={{ maxWidth: "100%" }}
            src="./images/login.jpg"
            alt="images"
          /> */}
        </div>
        <div className="d-flex justify-content-center flex-column col-lg-6 col-md-6 col-sm-12 px-5">
          <h1 className="text-center mb-4">Login</h1>
          <form className="">
            <div className="form-group py-3">
              <label for="exampleFormControlInput1">Email address</label>
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
            <input type="submit" value="Login" className="btn btn-dark" />
            <p className="my-3">
              Don't have account? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
