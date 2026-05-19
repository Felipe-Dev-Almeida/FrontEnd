import { useEffect, useEffectEvent, useState } from "react"
import "./ciclodevida.css"


export default function CicloDeVida() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        // Quando o componente é montado
        console.log("Componente MONTADO"); 

        // Para o componente desmontado(ciclo de vida), utiliza-se um return com uma função 
        return () => {
            console.log("Componente DESMONTADO");
        }
    }, [])

    useEffect(() => {
        console.log("Componenete ATUALIZADO")
        console.log(`Valor do contador ${contador}`);
    }, [])
 
    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={() => {
                setContador(contador + 1);
            }}>Contar</button>
        </>
    )
}