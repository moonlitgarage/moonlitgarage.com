import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home-page";
import AboutPage from "./routes/about-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage /> 
      },
      {
        path: "about",
        element: <AboutPage />
      },
    ]
  },
])