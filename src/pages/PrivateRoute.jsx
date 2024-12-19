import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let authenticated=false; //if we make true it will directly access the products otherwise it shows Login to access the products
    if(!authenticated){
        return <Navigate  to='/login' />
    }
  return children
}

export default PrivateRoute