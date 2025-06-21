import { useContext } from "react";
import { TaskContext } from "../ProviderContext/ProviderContext";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { user, loading } = useContext(TaskContext);

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" replace />;
};

export default Private;
