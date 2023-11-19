import React, { useState, useContext } from "react";
import { UserContext } from "../context/user-context";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false)


  
 
// This function is triggered when a form is submitted. It prevents the default form submission behavior, sends a POST request to the "/login" endpoint with JSON data containing an email and password, and handles the response. If the response is successful (status code 200), it sets the user using the returned data. Otherwise, it sets the errors using the error data from the response.
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          setIsLoading(false)
         
        });
      } else {
        r.json().then((errorData) => setErrors(errorData.error));
      }
    });
  }

  if (isLoading) {
    return <p>Loading...</p>
}
  return (
    <form onSubmit={handleSubmit}>
      <h5 >Email</h5>
      <input
        type="email"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='mt-2'>
        <h5>Password</h5>
      </div>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="pt-2">
        <button className="button" type ="submit">Login</button>
       
      </div>
      <p style={{ color: "red" }}>{errors}</p>
    </form>
  );
}

export default LoginForm;