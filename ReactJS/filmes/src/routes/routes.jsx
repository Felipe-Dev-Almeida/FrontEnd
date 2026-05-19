// instalart o pacote react-rouber-dom
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from "../pages/login/login";
import CadastroGenero from "../pages/cadastroGenero/cadastroGenero";
import CadastroFilme from "../pages/cadastroFilme/cadastroFilme";

const Rotas = () => {

     return (
    
    <BrowserRouter>
    <nav>   
      <Link to="/">Login</Link> {" "}
      <Link to="/filme">Filmes</Link> {" "}
      <Link to="/genero">Gênero</Link> {" "}
    </nav>
    <Routes>
      <Route element = {<Login/>} path="/"/>
      <Route element = {<CadastroGenero/>} path="/cadastro-genero"/>
      <Route element = {<CadastroFilme/>} path="/cadastro-filme"/>
    </Routes>
    </BrowserRouter>
    
  )

 }

 export default Rotas