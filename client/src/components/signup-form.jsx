import React, { useState, useContext } from "react";
import { UserContext } from "../context/user-context";
function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false)

  
// This function is triggered when a form is submitted. It prevents the default form submission behavior, sends a POST request to the "/signup" endpoint with JSON data, and handles the response. If the response is successful (HTTP status code 200), it calls the setUser function with the JSON data. Otherwise, it calls the setErrors function with the error data from the response.
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser);
        
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
      setIsLoading(false)
    });
  }
  if (isLoading) {
    return (<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h5 >
        Email:
      </h5>
      <input 
        className="input rounded-pill"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="mt-2">
        <h5>Password:</h5>
      </div>
      <input 
        className="input rounded-pill"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="mt-2">
        <h5>Confirm Password:</h5>
      </div>
      <input 
        className="input rounded-pill"
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <div className="pt-2">
        <button className='button' type="submit">Submit</button>
      </div>
      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SignupForm;