import "./crsl.scss"
import PropTypes from 'prop-types';
import { useState } from "react";
import arrow_right from '../../assets/arrow-right.svg';
import arrow_left from '../../assets/arrow-left.svg';

function Carrousel({imgsPath}){
    let [activeIndex,ChangeIndex]= useState(0);
    const maxIndex = 2;

    return (
    <div className="carrousel">
        <img src={imgsPath[activeIndex]} alt="photo de présentation du logement" className="banner" />
            <div className="arrowsContainer">
                <img 
                    src= {arrow_left}
                    alt="icone de fleche vers la gauche"
                    onClick={()=>(activeIndex>0 ? ChangeIndex(activeIndex -=1) : ChangeIndex(activeIndex=maxIndex-1))}
                    className="navArrow"
                />
                <img 
                    src={arrow_right}
                    alt="icone de fleche vers la droite"
                    onClick={()=>(activeIndex<maxIndex-1 ? ChangeIndex(activeIndex +=1) : ChangeIndex(activeIndex=0))}
                    className="navArrow"
                />
            </div> 
            <div className="counter">
                <p>{activeIndex+1}/{maxIndex}</p>
            </div>
    </div> 
    )
}
Carrousel.propTypes = {
    imgsPath: PropTypes.string.isRequired
}

export default Carrousel;