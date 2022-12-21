import React from "react";
import { Route, Navigate } from "react-router-dom";
type Props = {
  isLogged: boolean;
};

const Dashboard = (props: Props) => {
  return (
    <div>
      {props.isLogged ? <h1>Hello World</h1> : <Navigate to="/login" />}
    </div>
  );
};
export default Dashboard;
