import React from "react";
import './CategoryCard.css';
import type { FilterItem } from "../../../api/api";
import type { SelectableFilterItem } from "../../../api/queries";

interface CategoryCardProps {
    index: number;
    filter: FilterItem;
    isSelected: boolean;
    selectedCategories: SelectableFilterItem[];
    setSelectedCategories: React.Dispatch<React.SetStateAction<SelectableFilterItem[]>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ filter, index, isSelected, setSelectedCategories }) => {
    const handleCategoryClick = () => {
        setSelectedCategories(prev => {
            const copy = [...prev];
            const item = copy[index];
            copy[index] = { filter: item.filter, selected: !item.selected };
            return copy;
        });
    };

    return (
        <>
            <div className={"card category-card" + (isSelected ? " selected" : "")} onClick={handleCategoryClick}>
                <p className="category-name">{filter.name}</p>
                <img src={`/assets${filter.image_url.toLowerCase()}`} className="category-image" />
            </div>
        </>
    );
}

export default CategoryCard;