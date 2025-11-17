import React from 'react';
import './WebPage.css';
import Header from '../../components/Header/Header';
import FilterSidebar from '../../components/FiltersSidebar/FilterSidebar';
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection';
import RestaurantsSection from '../../components/RestaurantsSection/RestaurantsSection';

const Web: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='content-row'>
                <div className='left-content'>
                    <FilterSidebar />
                </div>
                <div className='right-content'>
                    <CategoriesSection />
                    <RestaurantsSection />
                </div>
            </div>
        </div>
    );
}

export default Web;