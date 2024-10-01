import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  //make api call to check authentication
  const isAllowed = false;
  return isAllowed ? <Outlet /> : <Navigate to="/login" />;
}
