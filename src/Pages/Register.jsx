import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async(e) => {
    e.preventDefault();

    if (
      (this.state.name !== "" && this.state.email !== "",
      this.state.password !== "")
    ) {
      await axios
        .post("https://rakmoni.herokuapp.com/register", this.state)

        .then((res) => {
          this.setState({ name: "", email: "", password: "" });

          console.log(res);
        });
    }
  };

  render() {
    return (
      <>
        <div className="container shadow py-5 mt-5">
          <h3 className="text-center">Register</h3>
          <div className="row justify-content-center">
            <div className="row">
              <div className="col-3"></div>
              <div className="col-sm">

                <form onSubmit={(e) => this.handleSubmit(e)}>
                  

                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.name}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.password}
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
  }
}
export default Register;
