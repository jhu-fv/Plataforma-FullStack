import { useState, useEffect } from "react";
import { AcomodacoesCard } from "./AcomodacoesCard"; 
import style from "./style.module.css";

export function ListaAcomodacao() {
    const [acomodacoes, setAcomodacoes] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:5000/acomodacoes")
            .then(response => response.json())
            .then(data => setAcomodacoes(data))
            .catch(error => console.error("Erro ao buscar acomodações", error));
            
    }, []);

    return (
        <div className={style.cardsContainer}>
            {acomodacoes.length === 0 ? (
                <p>Carregando acomodações...</p>
            ) : (
                <>
                    {console.log("Acomodacoes mapeadas:", acomodacoes)}
                    {acomodacoes.map((acomodacao, index) => (
                        <AcomodacoesCard key={acomodacao.id || index} acomodacao={acomodacao} />
                    ))}
                </>
            )}
        </div>
    );
    
}