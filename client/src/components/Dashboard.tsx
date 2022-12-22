import { Dispatch, SetStateAction, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
type Props = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setUsername: Dispatch<SetStateAction<string>>;
  username: string;
};

const Dashboard = (props: Props) => {
  return (
    <div>
      {props.isLogged ? (
        <>
          <h1>Hello, {props.username}</h1>
          <Link to="/dashboard/settings">Go to user settings </Link>
        </>
      ) : (
        <Navigate to="/login" />
      )}
      <button
        onClick={() => {
          props.setUsername("");
          props.setIsLogged(false);
          <Navigate to="/" />;
        }}
      >
        Go to main screen
      </button>
    </div>
  );
};
export default Dashboard;
