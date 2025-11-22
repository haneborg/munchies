import React from "react";
import './RestaurantCard.css';

interface RestaurantCardProps {
    name: string;
    isOpen: boolean;
    deliveryTime: number;
    imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ isOpen, deliveryTime, imageUrl, name }) => {
    const isOpenString = isOpen ? "open" : "closed";
    const isOpenStringCapitalized = isOpen ? "Open" : "Closed";

    return (
        <>
            <div className="card restaurant-card">
                <div className="top-content">
                    <div className="open-status">
                        <p className={"colored-circle " + isOpenString}></p>
                        <p className={isOpenString}> {isOpenStringCapitalized}</p>
                    </div>
                    {isOpen && <p className="delivery-time">{deliveryTime} min</p>}
                </div>
                <img src={`/src/assets${imageUrl}`} className={"restaurant-category-image " + isOpenString} />
                {!isOpen && <div className="centered"><p className="opening-time-overlay">
                    Opens tomorrow at 12 pm
                </p></div>}
                <div className={"bottom-content " + isOpenString}>
                    <p className={"name " + isOpenString}>{name}</p>
                    <p className={"button"}>→</p>
                </div>
            </div>
        </>
    );
}

export default RestaurantCard;