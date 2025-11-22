import React, { useEffect, useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import FilterSidebar from '../../components/FiltersSidebar/FilterSidebar';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import RestaurantsSection from '../../components/RestaurantsSection/RestaurantsSection';
import Filter from '../../components/FiltersSidebar/Filter/Filter';
import { useFilters, useRestaurants, type EnrichedRestaurant, type SelectableFilterItem } from '../../api/queries';

interface HomePageProps {
    isMobile: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ isMobile }) => {
    const { data: restaurantsData, isLoading: restaurantsIsLoading } = useRestaurants();
    const [restaurants, setRestaurants] = useState<EnrichedRestaurant[]>([]);

    const { data: categoryFiltersData, isLoading: filtersIsLoading } = useFilters();
    const [categoryFilters, setCategoryFilters] = useState<SelectableFilterItem[]>([]);

    useEffect(() => {
        if (categoryFiltersData) setCategoryFilters(categoryFiltersData);
    }, [categoryFiltersData]);

    useEffect(() => {
        if (restaurantsData) setRestaurants(restaurantsData);
    }, [restaurantsData]);

    const [deliveryTimeFilters, setDeliveryTimeFilters] = useState<SelectableFilterItem[]>([
        { filter: { id: "1", name: "0-10 min", image_url: "" }, selected: false },
        { filter: { id: "2", name: "10-30 min", image_url: "" }, selected: false },
        { filter: { id: "3", name: "30-60 min", image_url: "" }, selected: false },
        { filter: { id: "4", name: "60+ min", image_url: "" }, selected: false },
    ]);

    const [priceRangeFilters, setPriceRangeFilters] = useState<SelectableFilterItem[]>([
        { filter: { id: "1", name: "$", image_url: "" }, selected: false },
        { filter: { id: "2", name: "$$", image_url: "" }, selected: false },
        { filter: { id: "3", name: "$$$", image_url: "" }, selected: false },
        { filter: { id: "4", name: "$$$$", image_url: "" }, selected: false },
    ]);

    useEffect(() => {
        let filteredRestaurants = restaurantsData ?? [];

        const filterRestaurantsByCategory = () => {
            if (!filteredRestaurants) return;

            const selectedFilterIds = categoryFilters
                .filter(f => f.selected)
                .map(f => f.filter.id);

            if (selectedFilterIds.length === 0) {
                return;
            }

            const filtered = filteredRestaurants.filter(r =>
                r.filters.some(f => selectedFilterIds.includes(f.id))
            );

            filteredRestaurants = filtered;
        }

        const filterRestaurantsByDeliveryTime = () => {
            if (!filteredRestaurants) return;

            const selectedFilterRanges = deliveryTimeFilters
                .filter(f => f.selected)
                .map(f => {
                    const range = f.filter.name.split(" min")[0];
                    if (range === "60+") return { rangeStart: 60, rangeEnd: 100 };
                    const [rangeStart, rangeEnd] = range.split("-").map(s => Number(s));
                    return { rangeStart, rangeEnd }
                });

            if (selectedFilterRanges.length === 0) {
                return;
            }

            const filtered = filteredRestaurants.filter(r => selectedFilterRanges.some(
                f => f.rangeStart <= r.restaurant.delivery_time_minutes && f.rangeEnd >= r.restaurant.delivery_time_minutes)
            );

            filteredRestaurants = filtered;
        }

        const filterRestaurantsByPriceRange = () => {
            if (!filteredRestaurants) return;

            const selectedFilterRanges = priceRangeFilters
                .filter(f => f.selected)
                .map(f => f.filter.name);

            if (selectedFilterRanges.length === 0) {
                return;
            }

            const filtered = filteredRestaurants.filter(r =>
                selectedFilterRanges.includes(r.price_range.range)
            );

            filteredRestaurants = filtered;
        }

        filterRestaurantsByCategory();
        filterRestaurantsByDeliveryTime();
        filterRestaurantsByPriceRange();

        setRestaurants(filteredRestaurants);

    }, [categoryFilters, deliveryTimeFilters, priceRangeFilters, restaurantsData]);

    return (
        !restaurantsIsLoading && !filtersIsLoading &&
        <div className='home-page'>
            <Header />
            <div className='home-content'>
                <div>
                    {isMobile &&
                        <Filter title={"Delivery time"} selectedOptions={deliveryTimeFilters} setSelectedOptions={setDeliveryTimeFilters} />}
                    {!isMobile &&
                        <FilterSidebar
                            categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters}
                            deliveryTimeFilters={deliveryTimeFilters} setDeliveryTimeFilters={setDeliveryTimeFilters}
                            priceRangeFilters={priceRangeFilters} setPriceRangeFilters={setPriceRangeFilters}
                        />}
                </div>
                <div>
                    <CategoriesSection categoryFilters={categoryFilters} setCategoryFilters={setCategoryFilters} />
                    {restaurants && <RestaurantsSection restaurants={restaurants} />}
                </div>
            </div>
        </div>
    );
}

export default HomePage;