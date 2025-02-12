
import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated === "true") {
      navigate("/");
    } else {
      navigate("/auth");
    }
  }, []);

  return (
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
  );
}

export default App;