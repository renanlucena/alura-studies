import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TarefasContext, TarefasProvider } from "./common/context/Tarefas";
import App from "./paginas/App";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <TarefasProvider>
                <Routes>
                    <Route path="/" element={<App/>}/> 
                </Routes>
            </TarefasProvider>
        </BrowserRouter>
    )
}