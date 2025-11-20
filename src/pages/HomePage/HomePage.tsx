import React, { useState } from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import FilterSidebar from '../../components/FiltersSidebar/FilterSidebar';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import RestaurantsSection from '../../components/RestaurantsSection/RestaurantsSection';
import Filter from '../../components/FiltersSidebar/Filter/Filter';

interface HomePageProps {
    isMobile: boolean;
};

const HomePage: React.FC<HomePageProps> = ({ isMobile }) => {
    const [deliveryTimeFilters, setDeliveryTimeFilters] = useState<[string, boolean][]>([
        ["0-10 min", false],
        ["10-30 min", false],
        ["30-60 min", false],
        ["60+ min", false],
    ]);

    return (
        <div className='home-page'>
            <Header />
            <div className='home-content'>
                <div>
                    {isMobile ?
                        <Filter title={"Delivery time"} selectedOptions={deliveryTimeFilters} setSelectedOptions={setDeliveryTimeFilters} /> :
                        <FilterSidebar />}
                </div>
                <div>
                    <CategoriesSection />
                    <RestaurantsSection />
                </div>
            </div>
        </div>
    );
}

export default HomePage;