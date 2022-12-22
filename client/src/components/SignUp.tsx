import React from "react";
import { Link } from "react-router-dom";

type SignUpProps = {
  err: boolean | undefined;
  signUser: string;
  signPassword: string;
  setSignUser: (username: string) => void;
  setSignPassword: (password: string) => void;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SignUp: React.FC<SignUpProps> = ({
  err,
  signUser,
  signPassword,
  setSignUser,
  setSignPassword,
  handleSignUp,
}) => {
  return (
    <>
      <form onSubmit={handleSignUp}>
        <input
          value={signUser}
          onChange={(e) => setSignUser(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={signPassword}
          onChange={(e) => setSignPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
      <Link to="/login">Go to login page</Link>
      {err == true ? (
        <p>User exists!</p>
      ) : err == undefined ? (
        ""
      ) : (
        <p>Successfully signed up. Now you can log in.</p>
      )}
    </>
  );
};

export default SignUp;
