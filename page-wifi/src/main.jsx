import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Wifi from './component/Wifi.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Wifi/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
