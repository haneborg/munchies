import React from "react";
import './CategoryCard.css';

interface CategoryCardProps {
    name: string;
    index: number;
    isSelected: boolean;
    selectedCategories: [string, boolean][];
    setSelectedCategories: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, index, isSelected, selectedCategories, setSelectedCategories }) => {
    const handleCategoryClick = () => {
        setSelectedCategories(prev => {
            const copy = [...prev];
            const [name, selected] = copy[index];
            copy[index] = [name, !selected];
            return copy;
        });
    };

    return (
        <>
            <div className={"card category-card" + (isSelected ? " selected" : "")} onClick={handleCategoryClick}>
                <p className="category-name">{name}</p>
                <img src={`/src/assets/images/${name}.png`} className="category-image" />
            </div>
        </>
    );
}

export default CategoryCard;