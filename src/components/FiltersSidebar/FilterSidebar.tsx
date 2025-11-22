import React from "react";
import './FilterSidebar.css';
import Filter from "./Filter/Filter";
import type { SelectableFilterItem } from "../../api/queries";

interface FilterSidebarProps {
    categoryFilters: SelectableFilterItem[];
    setCategoryFilters: React.Dispatch<React.SetStateAction<SelectableFilterItem[]>>;
    deliveryTimeFilters: SelectableFilterItem[];
    setDeliveryTimeFilters: React.Dispatch<React.SetStateAction<SelectableFilterItem[]>>;
    priceRangeFilters: SelectableFilterItem[];
    setPriceRangeFilters: React.Dispatch<React.SetStateAction<SelectableFilterItem[]>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ categoryFilters, setCategoryFilters, deliveryTimeFilters, setDeliveryTimeFilters, priceRangeFilters, setPriceRangeFilters }) => {
    return (
        <>
            <div className="card sidebar">
                <p className="sidebar-title">Filter</p>
                <Filter
                    title="FOOD CATEGORY"
                    selectedOptions={categoryFilters}
                    setSelectedOptions={setCategoryFilters}
                    layout="single-column"
                />
                <Filter
                    title="DELIVERY TIME"
                    selectedOptions={deliveryTimeFilters}
                    setSelectedOptions={setDeliveryTimeFilters}
                />
                <Filter
                    title="PRICE RANGE"
                    selectedOptions={priceRangeFilters}
                    setSelectedOptions={setPriceRangeFilters}
                />
            </div>
        </>
    );
}

export default FilterSidebar;