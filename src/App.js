import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AppLayout from "./Pages/AppLayout";
import { Provider } from "react-redux";
import store from "./Utils/store";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <AppLayout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
