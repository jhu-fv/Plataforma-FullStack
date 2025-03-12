import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import style from "./style.module.css"; 

export function AcomodacoesCard({ acomodacao }) {
    if (!acomodacao) {
        return <div>Erro: Dados da acomodação não disponíveis.</div>;
    }
    const { descricao, image, preco, localizacao } = acomodacao;
    const storageKey = `favorito_${descricao}`;

    const [favorito, setFavorito] = useState(() => {
        return localStorage.getItem(storageKey) === "true";
    });
    useEffect(() => {
        localStorage.setItem(storageKey, favorito);
    }, [favorito]);

    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <img 
                    src={image} 
                    alt={descricao || "Imagem não disponível"} 
                    className={style.image}
                />
                <div className={style.cardContent}>
                    <h3 className={style.card_d}>{descricao || "Descrição não disponível"}</h3>
                    <p className={style.card_l}>{localizacao || "Localização não disponível"}</p>
                    <p className={style.card_p}>{preco || "Preço não disponível"}</p>
                    <button 
                        className={`${style.heartButton} ${favorito ? style.favorito : ""}`} 
                        onClick={() => setFavorito(!favorito)}
                    >
                        <FaHeart />
                    </button>
                </div>
            </div>
        </div>
    );
}
