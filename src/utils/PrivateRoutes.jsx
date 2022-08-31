
import {Navigate,Outlet} from "react-router-dom";




const PrivateRoutes = () => {

  
  //let auth={'token':false}

let hastoken = JSON.parse(localStorage.getItem("auth"));

 //let hastoken1 = null;

  console.log(hastoken);

  return hastoken ? <Outlet/> : <Navigate to ="/login" />;
};

export default PrivateRoutes;
