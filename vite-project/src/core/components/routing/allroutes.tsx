import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/applayout/applayout";
import AuthPage from "../auth/authPage";
import { Main } from "../pages/main/main";
import { routes } from "./routes";

export const allroutes = createBrowserRouter([
  {
    path: routes.applayout ,
    element: <AppLayout />,
    children: [{ index: true, element: <Main /> }],
  },
  { path: routes.authPage,
    element: <AuthPage /> 
  },
]);
