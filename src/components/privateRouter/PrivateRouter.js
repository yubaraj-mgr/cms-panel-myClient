import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

export const PrivateRouter = ({ children }) => {
  // Wouldn't it be nice if we could redirect user to wherever they come from
  const location = useLocation();
  const { user } = useSelector((state) => state.admin);
  return user?._id ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
