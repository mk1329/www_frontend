import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./pages/loginPage/Login";
import Join from "./pages/loginPage/Join";
import Input from "./pages/loginPage/Input";
import Record from "./pages/recordPage/Record";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "record",
        element: <Record />
      }
    ]
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "join",
    element: <Join />,
  },
  {
    path: "input",
    element: <Input />,
  },
]);

export default Router;
