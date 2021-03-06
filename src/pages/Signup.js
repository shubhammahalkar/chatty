import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {signup,signInWithGoogle,signInWithGitHub } from "../helpers/auth";

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          email: '',
          password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.githubSignIn = this.githubSignIn.bind(this);
      }

      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      async handleSubmit(event) {
        event.preventDefault();
        this.setState({ error: '' });
        try {
          await signup(this.state.email, this.state.password);
        } catch (error) {
          this.setState({ error: error.message });
        }
      }

      async googleSignIn() {
        try {
          await signInWithGoogle();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }

      async githubSignIn() {
        try {
          await signInWithGitHub();
        } catch (error) {
          this.setState({ error: error.message });
        }
      }

    render() { 
        return ( 
            <div>
            <div className="container border mt-5 center">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <h1 style={{textAlign:"center"}}>
            Sign Up to
          <Link to="/">Chatty</Link>
          </h1>
          <p style={{textAlign:"center"}}>Fill in the form below to create an account.</p>
          <div className="form-group p-1" style={{textAlign:"center"}}>
            <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div  className="form-group " style={{textAlign:"center"}}>
            <input className="mt-3 form-group" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
          </div>
          <div style={{textAlign:"center"}} >
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button className="mt-3 btn btn-primary" type="submit">Sign up</button>


            <p className="mt-4">Or</p>
            <button className="mt-2 btn btn-primary" onClick={this.googleSignIn} type="button">
              Sign up with Google
            </button>

            <button className="mt-2 btn btn-primary"  type="button" onClick={this.githubSignIn}>
                 Sign up with GitHub
            </button>
          </div>
          
          <hr></hr>
          <p style={{textAlign:"center"}} >Already have an account? <Link to="/login">Login</Link></p>
        </form>
        </div>
      </div>
         );
    }
}
 
export default Signup ;