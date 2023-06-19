import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./paginas/App";
export default function AppRoutes(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/> 
                </Routes>
        
        </BrowserRouter>
    )
}