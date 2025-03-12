import style from "./style.module.css";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export function FavoriteButton() {
    const [favorito, setFavorito] = useState(false);
    
    return (
        <button 
            className={`${style.heartButton} ${favorito ? style.favorito : ""}`}
            onClick={() => setFavorito(!favorito)}
        >
            <FaHeart />
        </button>
    );
}

export const Header = () => {
    return (
        <nav>
            <header className={style.header}>
                <h1 className="h1Header"> 
                    ANFITRIÃO <br /> DE ALUGUEL 
                </h1>
                <FavoriteButton />
            </header>
        </nav>
    );
};
