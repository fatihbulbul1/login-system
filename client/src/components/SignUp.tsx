import React from "react";

type SignUpProps = {
  signUser: string;
  signPassword: string;
  setSignUser: (username: string) => void;
  setSignPassword: (password: string) => void;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SignUp: React.FC<SignUpProps> = ({
  signUser,
  signPassword,
  setSignUser,
  setSignPassword,
  handleSignUp,
}) => {
  return (
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
  );
};

export default SignUp;
