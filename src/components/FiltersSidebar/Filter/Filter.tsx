import React from "react";
import './Filter.css';

interface FilterProps {
    title: string;
    selectedOptions: [string, boolean][];
    setSelectedOptions: React.Dispatch<React.SetStateAction<[string, boolean][]>>;
    layout?: "single-column" | "auto";
}

const Filter: React.FC<FilterProps> = ({ title, selectedOptions, setSelectedOptions, layout = "auto" }) => {

    const handleOptionClick = (index: number) => {
        setSelectedOptions(prev => {
            const copy = [...prev];
            const [name, selected] = copy[index];
            copy[index] = [name, !selected];
            return copy;
        });
    };

    return (
        <div className="filter">
            <p className="filter-title">{title}</p>
            <div className={`options-container ${layout}`}>
                {selectedOptions.map(([optionName, isSelected], index) => (
                    <button
                        key={index}
                        className={"card " + `option-button ${isSelected ? "selected" : ""}`}
                        onClick={() => handleOptionClick(index)}
                    >
                        {optionName}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filter;
