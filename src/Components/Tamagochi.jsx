import React from 'react';
import "../styles/Tamagochi.css"
import heart from "../images/favorite_FILL0_wght400_GRAD0_opsz48.svg"
import tamagochiImage from "../images/tamagochi.png"

const Tamagochi = () => {
    return (
        <figure>
            <img src= {tamagochiImage} alt="Tamagochi"/>
            <div class="heart">
                <img src= {heart} alt="Heart" />
                <img src= {heart} alt="Heart" />
                <img src= {heart} alt="Heart" />
            </div>
    </figure>
    );
}

export default Tamagochi;