import React, { Component } from "react";
import { Link } from "react-router-dom";
import {signin} from '../helpers/auth';

 class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        email: "",
        password: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: "" });
        try {
          await signin(this.state.email, this.state.password);
        } catch (error) {
          this.setState({ error: error.message });
        }
      }
      render() {
        return (
          <div className="container border mt-5" >
            <form className="form-group"
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <h1 style={{textAlign:"center"}}>
                Login to
                <Link to="/">
                  Chatty
                </Link>
              </h1>
              <p style={{textAlign:"center"}}>
                Fill in the form below to login to your account.
              </p>
              <div style={{textAlign:"center"}} >
                <input className="form-group p-1" style={{textAlign:"center"}}
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div style={{textAlign:"center"}} >
                <input className="form-group p-1" style={{textAlign:"center"}}
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                />
              </div>
              <div style={{textAlign:"center"}} >
                {this.state.error ? (
                  <p>{this.state.error}</p>
                ) : null}
                <button className="mt-3 btn btn-primary" type="submit">Login</button>
              </div>
              <hr />
              <p style={{textAlign:"center"}}>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        );
      }
    }
    export default Login;