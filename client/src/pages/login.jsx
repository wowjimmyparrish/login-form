import { useState } from "react";
import LoginForm from "../components/login-form";
import SignupForm from "../components/signup-form";
function Login() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="text-center pt-5">
      <div>
        <h1>Login Page</h1>
      </div>
      {showLogin ? (
        <div>
          <div>
            <LoginForm  />
          </div>
          <div>
            <p>
              Don't have an account?
              </p>
              <div className="mt-2">
                <button onClick={() => setShowLogin(false)}>Sign Up</button>{' '}
              </div>
            
          </div>
        </div>
      ) : (
        <div >
          <SignupForm />
          <div className= "mt-4">
            <p>
              Already have an account?
              <div className="pt-2">
              <button  onClick={() => setShowLogin(true)}>Log In</button>{' '}
              </div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;