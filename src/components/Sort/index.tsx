import React from 'react';
import './sort.css';
import { typeSort } from '../../pages/App';

interface SortProps {
    isDarkMode: boolean;
    sort: typeSort;
    setSort: (value: typeSort) => void;
}

const Sort: React.FC<SortProps> = ({ sort, setSort, isDarkMode }) => {
    const getButtonClass = (buttonType: typeSort) => {
        const isActive = sort === buttonType;
        if (isActive) {
            return isDarkMode ? 'button-active-dark' : 'button-active';
        }
        return isDarkMode ? 'button-inactive-dark' : 'button-inactive';
    };

    const getFontStyle = (buttonType: typeSort) => ({
        fontFamily: 'NotoSans',
        fontWeight: sort === buttonType ? 'bold' : 500
    });

    return (
        <div className='sort-container'>
            <h1>Extensions List</h1>
            <div className='sort-container-button'>
                <div
                    className={getButtonClass(typeSort.All)}
                    onClick={() => setSort(typeSort.All)}
                >
                    <h5 style={getFontStyle(typeSort.All)}>All</h5>
                </div>
                <div
                    className={getButtonClass(typeSort.Active)}
                    onClick={() => setSort(typeSort.Active)}
                >
                    <h5 style={getFontStyle(typeSort.Active)}>Active</h5>
                </div>
                <div
                    className={getButtonClass(typeSort.Inactive)}
                    onClick={() => setSort(typeSort.Inactive)}
                >
                    <h5 style={getFontStyle(typeSort.Inactive)}>Inactive</h5>
                </div>
            </div>
        </div>
    );
}

export default Sort;
