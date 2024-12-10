import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function PortectedRoute() {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;  
}