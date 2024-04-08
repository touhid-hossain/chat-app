import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login", { replace: true });
    }
  }, [authUser, navigate]);

  return authUser ? children : null;
};

export default ProtectRoute;
