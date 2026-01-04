import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ProtectedLayout = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
