import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignForm from "./components/routes/auth/SignForm";
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
            },
            {
                path: "/auth",
                element: <SignForm />
              },
        ]
    }
])

export default router