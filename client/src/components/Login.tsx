import { useEffect } from "react";

type LoginProps = {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  isLogged: boolean;
};

const Login: React.FC<LoginProps> = ({
  handleLogin,
  username,
  password,
  setPassword,
  setUsername,
  isLogged,
}) => {
  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  );
};
export default Login;
