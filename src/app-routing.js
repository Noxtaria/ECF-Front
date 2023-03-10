import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignForm from "./components/routes/auth/SignForm";
import ErrorPage from "./components/routes/ErrorPage";
import HomePage from "./components/routes/HomePage";
import UserForm from "./components/routes/users/UserForm"
import UserList from "./components/routes/users/UserList"

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
            {
                path: "/auth",
                element: <UserForm />
            },
            {
                path: "/users",
                element: <UserList />
              },
              {
                path: "/users/add",
                element: <UserForm />
              },
        ]
    }
])

export default router