import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let user = true;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Topbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: user ? <Home /> : <Login /> },
      { path: "register", element: user ? <Home /> : <Register /> },
      { path: "write", element: user ? <Write /> : <Login /> },
      { path: "settings", element: <Settings /> },
      { path: "post/:post", element: <Single /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
