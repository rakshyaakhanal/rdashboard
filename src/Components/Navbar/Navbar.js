import React from 'react';
import './Navbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarWrapper'>
                <div className='navLeft'>
                    <span className='logo'>Jeonadmin</span>
                </div>

                <div className='navRight'>
                    <div className='navbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className='navIconBadge'>2</span>
                    </div>

                    <div className='navbarIconContainer'>
                        <LanguageIcon />
                        <span className='navIconBadge'>2</span>
                    </div>

                    <div className='navbarIconContainer'>
                        <SettingsIcon />
                    </div>
                    <img src='https://picsum.photos/id/0/200/300' className='navImg' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;