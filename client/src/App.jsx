import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./routes/ProtectRoute";

function App() {
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Home />
        </ProtectRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];

  const router = createBrowserRouter([...routesForAuthenticatedOnly]);
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
