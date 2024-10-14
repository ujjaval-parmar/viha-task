import { createBrowserRouter } from "react-router-dom";
import ViewAllStudents from "../pages/ViewAllStudents";
import ErrorPage from "../pages/ErrorPage";
import StudentRegister from "../pages/StudentRegister";
import App from "../App";

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
          
            {
                path:'/',
                element: <ViewAllStudents />,
            },
            {
                path: '/student-registration',
                element: <StudentRegister />,
            }
        ],
        errorElement: <ErrorPage />
    }


]);


export default router;