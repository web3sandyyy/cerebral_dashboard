import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const creds = JSON.parse(localStorage.getItem("creds") || "{}");

export const getBlockData = async (blockNumber: Number) => {
    if (!creds) {
        console.log("User not authenticated");
        return;
    }

    try {
        const res = await axios.get(`${apiUrl}${blockNumber}`, {
            auth: {
              username: creds.username,
              password: creds.password
        },
      });
      return res.data
      
    } catch (error) {
      console.log(error);
      return;
    }
  };