import { Routes , Route } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { RouterLayout } from "../common/Routerlayout"

export const AppRouter: React.FC <{}> = () =>{
    return(
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/" element={<HomePage/>}/>
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}