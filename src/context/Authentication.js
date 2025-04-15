import { createContext, useState } from "react";
import { findUser } from "../models/Users";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = ({usrn, pwrd}) => {
    const u = findUser({ usrn, pwrd });
    console.log(u);
    if (u) {
      setUser(u);
      return true; 
    }
    return false;
  }

  const loggedIn = !!user;

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};