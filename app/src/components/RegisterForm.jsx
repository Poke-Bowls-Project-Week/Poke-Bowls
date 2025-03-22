import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Create an Account</h2>
          <form id="login-form" aria-label="register-form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter your username"
                maxlength="20"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                minlength="6"
              />
            </div>

            <div className="input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                placeholder="Re-enter your password"
                minlength="6"
              />
            </div>

            <button type="submit" className="login-btn">
              Register
            </button>
          </form>

          <p className="register-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
