import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function login(username: string, password: string) {
  const { data, error } = await supabase
    .from("admin")
    .select("*")
    .eq("username", username)
    .eq("password", password);

  if (error) {
    console.error("Error fetching admin data:", error);
    return { success: false, message: "Server error" };
  }

  if (data && data.length > 0) {
    const creds = {
        username,
        password,
    }
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("creds", JSON.stringify(creds));

    return { success: true, message: "Login successful" };
  } else {
    return { success: false, message: "Invalid username or password" };
  }
}

export async function getInstruments() {
  const isAuthenticated = localStorage.getItem("authenticated");
  const creds = JSON.parse(localStorage.getItem("creds") || "{}");

  if (isAuthenticated !== "true") {
    console.error("User is not authenticated");
    return null;
  }

  await supabase.rpc("set_auth", {
    username: creds.username,
    password: creds.password,
  });

  const { data, error } = await supabase.from("six").select();
  if (error) {
    console.error("Error fetching data from six:", error);
    return null;
  }
  return data;
}

// export async function admin() {

//   const { data, error } = await supabase.from("admin").select();
//   if (error) {
//     console.error("Error fetching data from six:", error);
//     return null;
//   }
//   return data;
// }
