import React, { useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import './CategoriesSection.css';

interface CategoriesSectionProps { }

const CategoriesSection: React.FC<CategoriesSectionProps> = () => {
    const [categoryFilters, setCategoryFilters] = useState<[string, boolean][]>([
        ["Hamburger", false],
        ["Pizza", false],
        ["Hamburger", false],
        ["Hamburger", false],
        ["Hamburger", false],
        ["Hamburger", false],
    ]);

    return (
        <>
            <div className="categories-row">
                {categoryFilters.map(([name, isSelected], index) => (
                    <CategoryCard
                        index={index}
                        name={name}
                        isSelected={isSelected}
                        selectedCategories={categoryFilters}
                        setSelectedCategories={setCategoryFilters}
                    />
                ))}
            </div>
        </>
    );
}

export default CategoriesSection;