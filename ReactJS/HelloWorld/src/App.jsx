import './App.css'
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/title/title';


function App() {
   return (
     <>
     <Title textoTitulo="Bem Vindo, sou Título"/>
     <Title textoTitulo="Eu sou o outro Título"/>
     <Paragrafo textoParagrafo="Lorem Ipsun"/>
     </>
   );
}

export default App
//Criar um componente Title