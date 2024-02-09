import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./assets/routs.js";
import { Login } from "./pages/Login.js";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
