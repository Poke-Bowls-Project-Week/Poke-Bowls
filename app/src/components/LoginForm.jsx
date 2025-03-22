import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form id="login-form" aria-labelledby="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="register-link">
            Don't have an account?
            <Link to="/register"> Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
