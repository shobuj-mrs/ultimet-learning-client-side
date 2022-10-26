import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../Pages/Blog/Blogs";
import CheckOut from "../Pages/CheackOut/CheckOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginAndRegister/Login/Login";
import Register from "../Pages/LoginAndRegister/Register/Register";
import AboutUs from "../Pages/Shared/AboutUs/AboutUs";
import Course from "../Pages/Shared/Course/Course"
import DetailCourse from "../Pages/Shared/Course/DetailCourse/DetailCourse";
import Faq from "../Pages/Shared/Faq/Faq";
import PrivetRoute from "./PrivetRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                loader: () => {
                    return fetch(`https://assignment-10-the-ultimate-learning-server-side.vercel.app/courses`)
                },
                element: <PrivetRoute><Course></Course></PrivetRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/courseDetails',
                element: <DetailCourse></DetailCourse>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://assignment-10-the-ultimate-learning-server-side.vercel.app/courses/${params.id}`),
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
            }
        ]
    }
])