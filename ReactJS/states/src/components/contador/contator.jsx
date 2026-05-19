import { useState } from "react";
import "./contador.css";

const Contador = () => {
    const [valor, setValor] = useState(0)

    function incremento() {
        if (valor >= 10) {
            setValor(0)
        } else {
            setValor(valor + 1)
        }
    }

    // Criar uma função decremento()
    // Toda vez que o contador chegar em 1o você deve reiniciar
    // O contador não pode fazer contagem negativa
    function decremento() {
        if (valor > 0) {
            setValor(valor - 1)
        }
    }
    return (
        <>
            <p>Contagem: {valor}</p>
            <button onClick={incremento}>++</button>
            <button onClick={decremento}>--</button>
        </>
    );
}

export default Contador