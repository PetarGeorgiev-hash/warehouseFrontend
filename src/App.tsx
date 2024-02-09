import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./assets/routs.js";
import { Login } from "./pages/Login.js";
import ErrorHandler from "./pages/ErrorHandler.js";
import { Register } from "./pages/Register.js";
import { AuthContextProvider } from "./store/auth.context.js";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Login />,
    errorElement: <ErrorHandler />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
