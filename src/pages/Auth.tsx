import { adminLogin } from "../server";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const auth = async () => {
        const data = await adminLogin(username, password);

        if (data.success) {
            navigate("/");
        }
      }
    
  return (
    <div>
        <div>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}    />
        </div>
        <button onClick={auth}>login</button>
    </div>
  )
}

export default Auth 