import { createContext, useEffect, useState } from "react";
import { findUser } from "../models/Users";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, [])

  const login = ({usrn, pwrd}) => {
    const u = findUser({ usrn, pwrd });
    // console.log(u);
    if (u) {
      setUser(u);
      localStorage.setItem('user', JSON.stringify(u));
      return true; 
    }
    return false;
  }

  const loggedIn = !!user;

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};