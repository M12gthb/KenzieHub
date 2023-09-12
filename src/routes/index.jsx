import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashborad"
import Register from "../pages/Register"
import Login from "../pages/Login"
import NotFound from "../pages/Not found"
import {  TechProvider } from "../providers/TechProvider"

export const RouterMain = () =>{
    return(
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/dashboard" element={
      <TechProvider>
        <Dashboard />
      </TechProvider>
      }/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    )
}

export default RouterMain