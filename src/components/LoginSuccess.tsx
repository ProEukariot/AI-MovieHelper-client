import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginSuccess = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const [user, setUser] = useAuth();

  useEffect(() => {
    const data = searchParams.get("data");

    if (!data) {
      navigate("/login/failure");

      return;
    }

    const parsedData = JSON.parse(atob(data!));
    console.log(parsedData);
    setUser(parsedData);

    navigate("/");
  }, []);

  return <></>;
};

export default LoginSuccess;
