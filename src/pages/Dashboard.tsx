import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const authenticated = localStorage.getItem("authenticated");
      if (authenticated !== "true") {
        navigate("/auth");
      }
    }, []);
    
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard