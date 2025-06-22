
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const { createUser } = use( AuthContext );
    const navigate = useNavigate();
    const handleOnSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
     
        createUser( email, password );
        navigate( "/" );
    }
    return (
      <div>
        <div className="hero bg-base-200 max-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="text-4xl text-center font-bold">
                  Register Now!
                </h1>
                <form className="fieldset" onSubmit={handleOnSubmit}>
                  <label className="label">Name</label>
                  <input type="text" name='name' className="input" placeholder="Name" />
                 
                  <label className="label">Email</label>
                  <input type="email" name='email' className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                                    placeholder="Password"
                                    name='password'
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>
                  Do you already have an account? Please{" "}
                  <Link to="/login" className="text-blue-400 underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;