import React, { Dispatch, SetStateAction, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
type Props = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setUsername: Dispatch<SetStateAction<string>>;
  username: string;
};
const UserSettings: React.FC<Props> = ({
  isLogged,
  setIsLogged,
  setUsername,
  username,
}) => {
  const [pw, setPw] = useState("");
  const [pwA, setPwA] = useState("");
  const [status, setStatus] = useState<boolean | undefined>(undefined);
  const navigate = useNavigate();
  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pw == pwA) {
      fetch("http://localhost:3000/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: pw,
        }),
      })
        .then((res) => res.json())
        .then((data) => setStatus(data))
        .then(() => {
          setPw("");
          setPwA("");
        });
    } else {
      setStatus(false);
      setPw("");
      setPwA("");
    }
  };
  return (
    <div>
      {isLogged ? (
        <>
          <p>Change password for user {username}</p>
          <form className="column" onSubmit={handleChangePassword}>
            <label htmlFor="pw">Type new password</label>
            <input
              id="pw"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              type="password"
            />
            <label htmlFor="pw-again">Type again</label>
            <input
              id="pw-again"
              value={pwA}
              onChange={(e) => setPwA(e.target.value)}
              type="password"
            />
            <button>Reset password</button>
            <button
              onClick={() => {
                setUsername("");
                setIsLogged(false);
                navigate("/login");
              }}
            >
              Go to main screen
            </button>
          </form>
          {status === undefined ? (
            ""
          ) : status === true ? (
            <p>Password successfully reset.</p>
          ) : (
            <>
              <p>Passwords did not match.</p>
              <p>Or passwords are the same.</p>
            </>
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};
export default UserSettings;
