import React from "react";
import './RestaurantsSection.css';
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import { type EnrichedRestaurant } from "../../api/queries";

interface RestaurantsSectionProps {
    restaurants: EnrichedRestaurant[];
}

const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({ restaurants }) => {
    return (
        <>
            <div>
                <p className="section-title">Restaurant's</p>
                <div className="restaurant-grid">
                    {restaurants?.map(({ restaurant, open_status: openStatus, filters }) => (
                        <RestaurantCard
                            key={restaurant.id}
                            isOpen={openStatus.is_open}
                            deliveryTime={restaurant.delivery_time_minutes}
                            imageUrl={filters[0].image_url}
                            name={restaurant.name}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default RestaurantsSection;