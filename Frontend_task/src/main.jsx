import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Dashboard from './components/Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import Statistics from './components/Statistics'
import Barchart from './components/Barchart'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
{path:'/dashboard',element:<Dashboard/> },
{path:'/statistics',element:<Statistics/>},
{path:'/barchart',element:<Barchart/>},
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
