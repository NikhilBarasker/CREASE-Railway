import React from 'react'

import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth")
 
  return (
  isAuth ? children :<Navigate to={"/login"} />
)   
}

export default PrivateRoutes