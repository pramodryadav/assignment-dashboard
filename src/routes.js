import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/Error';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './protectRoutes';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Dashboard /> },
                    {
                        path: "dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "contact",
                        element: <Contact />,
                    },
                    /* the rest of the routes */
                ],
            },
        ],
    },
    {
        path:"/login",
        element:<Login/>,
        errorElement: <ErrorPage />,
    },
    {
        path:"*",
        element:<PageNotFound/>,
        errorElement: <ErrorPage />,
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}