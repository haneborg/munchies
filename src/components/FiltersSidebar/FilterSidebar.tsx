import React, { useState } from "react";
import './FilterSidebar.css';
import Filter from "./Filter/Filter";

interface FilterSidebarProps { }

const FilterSidebar: React.FC<FilterSidebarProps> = () => {
    const [categoryFilters, setCategoryFilters] = useState<[string, boolean][]>([
        ["Burgers", false],
        ["Pizza", false],
        ["Asian", false],
        ["Vegan", false],
    ]);

    const [deliveryTimeFilters, setDeliveryTimeFilters] = useState<[string, boolean][]>([
        ["0-10 min", false],
        ["10-30 min", false],
        ["30-60 min", false],
        ["60+ min", false],
    ]);

    const [priceRangeFilters, setPriceRangeFilters] = useState<[string, boolean][]>([
        ["$", false],
        ["$$", false],
        ["$$$", false],
        ["$$$$", false],
    ]);

    return (
        <>
            <div className="card sidebar">
                <p className="sidebar-title">Filter</p>
                <Filter
                    title="FOOD CATEGORY"
                    options={categoryFilters}
                    setOptions={setCategoryFilters}
                    layout="single-column"
                />
                <Filter
                    title="DELIVERY TIME"
                    options={deliveryTimeFilters}
                    setOptions={setDeliveryTimeFilters}
                />
                <Filter
                    title="PRICE RANGE"
                    options={priceRangeFilters}
                    setOptions={setPriceRangeFilters}
                />
            </div>
        </>
    );
}

export default FilterSidebar;