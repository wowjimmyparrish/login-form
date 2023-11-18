import {  useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./context/user-context";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  const { user, setUser } = useContext(UserContext);
 
   // fetching user data
   useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, [setUser]);

  // if user is not logged in, redirect to login page
  if (!user) return <Login  />;


  return (
    <div>
   <main>
    <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
    </Switch>
    </main>
  </div>
  )
}

export default App;
