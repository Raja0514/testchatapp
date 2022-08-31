import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {

  const navigate=useNavigate();

  const [user, setuser] = useState({ email: "", password: "",});


  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();

    console.log("working");

    const { email, password } = user;

    console.log(email);
    console.log(password);
    await axios
      .post("https://rakmoni.herokuapp.com/login", user)

      //console.log(user)

      .then((res) => {
        //console.log(res);

        localStorage.setItem("auth", JSON.stringify(res));
        navigate('/chat')
      });
      
  };

  return (
    <>
      <div className="container shadow py-5  mt-5">
        <h3 className="text-center">Login</h3>
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-sm">

              <form onSubmit={handleSubmit}>


                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={handlechange}
                    value={user.email}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handlechange}
                    value={user.password}
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
