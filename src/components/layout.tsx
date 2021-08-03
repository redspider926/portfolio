import React from 'react'
import HomeIcon from '../assets/images/icons/home.svg'

const Layout: React.FC = ({ children }) => {
    return <div className="component-layout">
        <div className="component-layout-header">
            <div className="component-layout-header__logo"></div>
            <div className="component-layout-header__nav">
                <div className="component-layout-header__nav-item">
                    HOME
                </div>
                <div className="component-layout-header__nav-item">
                    WORKS
                </div>
                <div className="component-layout-header__nav-item">
                    SKILLS
                </div>
                <div className="component-layout-header__nav-item">
                    ABOUT
                </div>
                <div className="component-layout-header__nav-item">
                    CONTACT
                </div>
            </div>
        </div>
        {children}
    </div>
}

export default Layout