import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../layout/Home";
import ChatHome from "../components/ChatHome/ChatHome";
import Registration from "../components/Authentication/Registration/Registration";
import Login from "../components/Authentication/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/chathome',
                element: <ChatHome />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;