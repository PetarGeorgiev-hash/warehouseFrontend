import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./assets/routs.js";
import { Login } from "./pages/Login.js";
import ErrorHandler from "./pages/ErrorHandler.js";
import { Register } from "./pages/Register.js";
import { AuthContextProvider } from "./store/auth.context.js";
import { AuthGuard } from "./pages/AuthGuard.js";
import { Home } from "./pages/Home/Home.js";
import { Clients } from "./pages/Clients/Clients.js";
import { ClientsProvider } from "./store/clients.context.js";

const router = createBrowserRouter([
  {
    path: routes.guard,
    element: <AuthGuard />,
    children: [
      { path: routes.home, element: <Home /> },
      {
        path: routes.client,
        element: <Clients />,
      },
    ],
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.register,
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorHandler />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <ClientsProvider>
        <RouterProvider router={router} />
      </ClientsProvider>
    </AuthContextProvider>
  );
}

export default App;
