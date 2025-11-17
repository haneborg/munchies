import React from "react";
import './RestaurantsSection.css';
import RestaurantCard from "./RestaurantCard/RestaurantCard";

interface RestaurantsSectionProps { }

const RestaurantsSection: React.FC<RestaurantsSectionProps> = () => {
    return (
        <>
            <div>
                <p className="section-title">Restaurant's</p>
                <div className="restaurant-grid">
                    <RestaurantCard isOpen={true} deliveryTime={30} category="coffee" name="Cortado Bar" />
                    <RestaurantCard isOpen={true} deliveryTime={30} category="taco" name="Neta" />
                    <RestaurantCard isOpen={true} deliveryTime={30} category="breakfast" name="Breakfast Club" />
                    <RestaurantCard isOpen={true} deliveryTime={30} category="hamburger" name="Burgers'n stuff" />
                    <RestaurantCard isOpen={true} deliveryTime={30} category="fries" name="Fries Guys" />
                    <RestaurantCard isOpen={false} deliveryTime={30} category="coffee" name="Cortado Bar" />
                    <RestaurantCard isOpen={false} deliveryTime={30} category="coffee" name="Cortado Bar" />
                    <RestaurantCard isOpen={false} deliveryTime={30} category="coffee" name="Cortado Bar" />
                    <RestaurantCard isOpen={false} deliveryTime={30} category="coffee" name="Cortado Bar" />


                </div>
            </div>
        </>
    );
}

export default RestaurantsSection;