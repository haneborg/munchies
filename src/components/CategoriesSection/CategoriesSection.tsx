import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import './CategoriesSection.css';
import { type SelectableFilterItem } from "../../api/queries";

interface CategoriesSectionProps {
    categoryFilters: SelectableFilterItem[];
    setCategoryFilters: React.Dispatch<React.SetStateAction<SelectableFilterItem[]>>;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categoryFilters, setCategoryFilters }) => {
    return (
        <>
            <div className="categories-row">
                {categoryFilters.map((f, index) => (
                    <CategoryCard
                        key={f.filter.id}
                        index={index}
                        filter={f.filter}
                        isSelected={f.selected}
                        selectedCategories={categoryFilters}
                        setSelectedCategories={setCategoryFilters}
                    />
                ))}
            </div>
        </>
    );
}

export default CategoriesSection;