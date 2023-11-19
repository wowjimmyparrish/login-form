import { useContext } from 'react'
import { UserContext } from '../context/user-context'

function Home() {
  const { user, setUser } = useContext(UserContext);

// This function sends a DELETE request to the /logout endpoint using the fetch function. If the response is successful (status code 200-299), it sets the user to null.
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='text-center'>
    <h2>Welcome, {user.email}!</h2>
    <button className= 'button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home;