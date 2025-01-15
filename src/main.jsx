import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardPage from './routes/dashboardPage/DashboardPage'
import ChatPage from './routes/chatpage/ChatPage'
import HomePage from './routes/homepage/Homepage'

const router = createBrowserRouter([
  {
    path:'/',
    element:(<HomePage/>)
  },
  {
    path:'/dashboard',
    element:(<DashboardPage/>), 
    children:[
      {path:'/dashboard/chats/:id',
        element:(<ChatPage/>)
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
