import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [signUser, setSignUser] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLogged(data);
        if (data) {
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        }
      });
  };
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: signUser,
        password: signPassword,
      }),
    });
    setSignUser("");
    setSignPassword("");
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                handleLogin={handleLogin}
                isLogged={isLogged}
              />
              {isLogged ? (
                <Link to="/dashboard">You are logged in. Go to dashboard</Link>
              ) : (
                ""
              )}
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              signUser={signUser}
              signPassword={signPassword}
              setSignUser={setSignUser}
              setSignPassword={setSignPassword}
              handleSignUp={handleSignUp}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard isLogged={isLogged} />} />
      </Routes>
    </div>
  );
}

export default App;
