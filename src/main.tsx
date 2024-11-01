import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Root from "./pages/Root.tsx";
import LoginSuccess from "./components/LoginSuccess.tsx";
import Preferences from "./components/Preferences.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      { element: <HomePage />, index: true },
      { element: <Preferences />, path: "preferences" },
      {
        path: "login",
        children: [
          { path: "success", element: <LoginSuccess /> },
          { path: "failure", element: <h1>Failure</h1> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
