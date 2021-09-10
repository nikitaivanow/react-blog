import React, { useEffect } from "react"
import "./style/App.css"
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom"
import NavBar from "./Components/UI/Navbar/MyNavbar"
import AppRouter from "./Components/AppRouter"
import { AuthContext } from "./contex"
import { useState } from "react/cjs/react.development"

function App() {

  

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)
  useEffect(()=> {
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setLoading(false)
  })
    return (
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
        }}>
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
