import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setAuthData } from "../state/auth/authSlice";

const LoginSuccess = () => {
  const [searchParams, _] = useSearchParams();
  const navigate = useNavigate();
  const dispach = useDispatch();

  useEffect(() => {
    const data = searchParams.get("data");

    if (!data) {
      navigate("/login/failure");

      return;
    }

    const parsedData = JSON.parse(atob(data!));
    console.log(parsedData);
    dispach(setAuthData(parsedData));

    navigate("/");
  });

  return <h1>Success</h1>;
};

export default LoginSuccess;
