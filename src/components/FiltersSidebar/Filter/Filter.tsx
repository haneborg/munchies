import React from "react";
import './Filter.css';
import type { SelectableFilterItem } from "../../../api/queries";

interface FilterProps {
    title: string;
    selectedOptions: SelectableFilterItem[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<SelectableFilterItem[]>>;
    layout?: "single-column" | "auto";
}

const Filter: React.FC<FilterProps> = ({ title, selectedOptions, setSelectedOptions, layout = "auto" }) => {
    const handleOptionClick = (index: number) => {
        setSelectedOptions(prev => {
            const copy = [...prev];
            const item = copy[index];
            copy[index] = { filter: item.filter, selected: !item.selected };
            return copy;
        });
    };

    return (
        <div className="filter">
            <p className="filter-title">{title}</p>
            <div className={`options-container ${layout}`}>
                {selectedOptions.map((item, index) => {
                    const { filter, selected } = item;
                    return (
                        <button
                            key={index}
                            className={"card option-button " + (selected ? "selected" : "")}
                            onClick={() => handleOptionClick(index)}
                        >
                            {filter.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter;
