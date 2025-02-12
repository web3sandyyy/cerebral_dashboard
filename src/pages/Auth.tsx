import { adminLogin } from "../server";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const navigate = useNavigate();

  const auth = async () => {
    setError(false);
    setServerError(false);
    try {
      const data = await adminLogin(username, password);

      if (data.success) {
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setServerError(true);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full bg-gray-200 flex items-center justify-center p-4">
      <div className="p-4 md:p-6 rounded-xl bg-white w-full md:w-3/5 lg:w-2/5 ">
        <p className="text-2xl font-bold text-center">LOGIN</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            auth();
          }}
          className="mt-6 md:mt-8 flex flex-col gap-4"
        >
          <div className="">
            <p className="font-semibold ml-2">Username</p>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 px-3 mt-2 rounded-lg bg-gray-200"
              required
            />
          </div>

          <div className="">
            <p className="font-semibold ml-2">Password</p>
            <input
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 px-3 mt-2 rounded-lg bg-gray-200"
              required
            />
          </div>

          <button
            className="bg-blue-500 active:bg-blue-600 mx-auto block p-2 px-6 rounded-lg text-white font-semibold"
            type="submit"
          >
            login
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-sm font-semibold mt-4">
            Invalid username or password
          </p>
        )}
        {serverError && (
          <p className="text-red-500 text-sm font-semibold mt-4">
            Something went wrong, Please try again later
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
