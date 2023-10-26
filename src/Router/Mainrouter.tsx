import {createBrowserRouter} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Homescreen from '../Pages/Homescreen'
import Login from '../AuthPages/Login'
import SignIn from '../AuthPages/SignIn'
import DashBoardLayout from '../Dashboard/DashBoardLayout'
import UserHome from '../DashboardPages/UserHome'


export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Homescreen/>
        }
    ]
},{
    path: '/login',
    element: <Login/>
},
{
    path: '/sign-in',
    element: <SignIn/>
},{
    path : '/userdashboard',
    element: <DashBoardLayout/>,
    children: [
        {
            index: true,
            element: <UserHome/>
        }
    ]
}
])