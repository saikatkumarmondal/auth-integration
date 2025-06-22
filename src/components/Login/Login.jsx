import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { loginUser } = use( AuthContext );
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser( email, password );
    navigate( "/orders" );

  }
    return (
      <div>
        <div className="hero bg-base-200 max-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="text-4xl text-center font-bold">Login Now!</h1>
                <form className="fieldset" onSubmit={handleLogin}>
                  <label className="label">Email</label>
                  <input type="email" className="input" name='email' placeholder="Email" />
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
                  <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>
                  New to this site? Please{" "}
                  <Link to="/register" className="text-blue-400 underline">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;