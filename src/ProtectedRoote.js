import React from 'react'
import {  Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoot({children,isAllowed,redirectRoute='./login'}) {
    if(!isAllowed){
        return <Navigate replace to={redirectRoute}/>
      } 
    return children ? children : <Outlet/>
}
