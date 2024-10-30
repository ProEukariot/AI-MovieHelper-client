import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  displayName: string;
  googleId: string;
  id: string;
  picture: Array<{ value: string }>;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

const initState: AuthState | null = { token: null, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearAuthData: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
