import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import './css/Header.css';

function Header(){
    return (
        <nav>
            <div className="brand-name">
                <p>
                    Satyam Shivhare
                </p>
            </div>
            <div className="search-box">
                <form action="">
                    
                        <input type="search" placeholder="search..." />
                    
                    
                        <button  type="submit"><SearchIcon fontSize="large" /></button>
                    
                </form>
            </div>
            <div className="menu-items-list">
                <ul>
                    <li>
                        <SettingsIcon fontSize="large"/>
                    </li>
                    <li>
                        <NotificationsActiveIcon fontSize="large" />
                    </li>
                    <li>
                        <AccountCircleIcon fontSize="large" />
                    </li>
                </ul>

            </div>

        </nav>
    );
}

export default Header;