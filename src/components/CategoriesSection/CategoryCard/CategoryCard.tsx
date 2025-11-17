import React from "react";
import './CategoryCard.css';

interface CategoryCardProps { }

const CategoryCard: React.FC<CategoryCardProps> = () => {
    return (
        <>
            <div className="card category-card">
                <p className="category-name">Hamburgers</p>
                <img src="/src/assets/images/hamburger.png" className="category-image" />
            </div>
        </>
    );
}

export default CategoryCard;