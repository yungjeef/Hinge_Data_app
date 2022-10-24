import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import UserPage from './user_upload.js';

const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  console.log(authenticated);
  if(authenticated) {
    console.log(localStorage.getItem("user"));
    return <UserPage/>
  } else {
    return <div>Login</div>
  }
};
export default Dashboard;