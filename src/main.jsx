import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardPage from './routes/dashboardPage/DashboardPage'
import ChatPage from './routes/chatpage/ChatPage'
import HomePage from './routes/homepage/Homepage'
import RootLayout from './layouts/rootLayout/rootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout'
import SigninPage from './routes/signinPage/SigninPage.jsx'
import SignupPage from './routes/signupPage/SignupPage.jsx'

// Import your Publishable Key

const router = createBrowserRouter([
  {
   element: <RootLayout/>,
   children:[
    {
      path:'/',
      element:(<HomePage/>)
    },
    {
      path:'/sign-in/*',
      element:(<SigninPage/>)
    },
    {
      path:'/sign-up/*',
      element:(<SignupPage/>)
    },
    {
      element:(<DashboardLayout/>),
      children:[
        {
          path:'/dashboard',
          element:(<DashboardPage/>)
        },
        {
          path:'/dashboard/chats/:id',
          element:(<ChatPage/>)
        }
      ]
    },

   ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
