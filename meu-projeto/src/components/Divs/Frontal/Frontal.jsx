import React, { useEffect, useState } from "react";
import style from "./style.module.css";

export const Frontal = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const newOpacity = 1 - scrollPosition / windowHeight;
        setOpacity(newOpacity < 0 ? 0 : newOpacity);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={style.frontal} style={{ opacity }}>
            <h1>SUA CASA, <br /> ONDE QUER QUE VOCÊ VÁ</h1>
        </div>
    );
};