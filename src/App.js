import { BrowserRouter as Router } from "react-router-dom"
import {AuthContext} from "./context/AuthContext"
import { useRoutes } from './routes';
import { useAuth } from "./hooks/auth.hook";


import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import 'materialize-css'

const  App = () => {
  const {login, logout, token, userId, ready} = useAuth()
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  
  if (!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider value={{
      token,userId,login,logout,isAuthenticated
    }}>
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="container">
          {routes}
        </div>
      </Router>
      
    </AuthContext.Provider>
  );
}

export default App;
