import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/routes/ErrorPage";
import HomePage from "./components/routes/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
])

export default router