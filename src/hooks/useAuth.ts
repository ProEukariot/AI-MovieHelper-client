import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { clearAuthData, setAuthData } from "../state/auth/authSlice";

const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispach = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setUser = (data: any) => {
    dispach(setAuthData(data));
  };

  const clearUser = () => {
    dispach(clearAuthData());
  };

  return [user, setUser, clearUser] as const;
};

export default useAuth;
