import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from "../page/Checkout";
import { Home } from "../page/Home";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sacola" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;