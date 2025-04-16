import { createContext, useEffect, useState } from "react";
import { findUser } from "../models/Users";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const saved = localStorage.getItem('user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setLoading(false);
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
    <AuthContext.Provider value={{ user, loggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};