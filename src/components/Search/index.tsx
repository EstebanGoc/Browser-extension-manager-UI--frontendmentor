import React from 'react'
import './search.css'
import Logo from '../../images/logo.svg';
import IconSun from '../../images/icon-sun.svg';
import IconMoon from '../../images/icon-moon.svg';

interface SearchProps {
    handleChangeDarkMode: () => void;
    isDarkMode: boolean;

}
const Search: React.FC<SearchProps> = ({ handleChangeDarkMode, isDarkMode }) => {


    return (
        <div className={isDarkMode ? 'container-dark-mode' : 'container'}>
            <div className={isDarkMode ? 'container-icon-extension-dark-mode' : 'container-icon-extension'}>
                <img className='logo-image' src={Logo} alt="logo" />

                <input
                    className='search-field'
                    type="text"
                    id="name"
                    required
                />
            </div>
            <img
                onClick={handleChangeDarkMode}
                className={isDarkMode ? 'sun-image' : 'moon-image'}
                src={isDarkMode ? IconSun : IconMoon}
                alt={isDarkMode ? "sun" : "moon"}
            />

        </div>
    )
}

export default Search