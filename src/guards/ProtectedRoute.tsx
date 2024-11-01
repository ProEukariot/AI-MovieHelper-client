import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user] = useAuth();

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
