import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import './CategoriesSection.css';

interface CategoriesSectionProps { }

const CategoriesSection: React.FC<CategoriesSectionProps> = () => {
    return (
        <>
            <div className="categories-row">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </>
    );
}

export default CategoriesSection;