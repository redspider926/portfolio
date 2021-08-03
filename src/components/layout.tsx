import React from 'react'
import { useScrollTop } from '../hooks'

const Layout: React.FC = ({ children }) => {
    const scrollTop = useScrollTop();

    return <div className="component-layout">
        <div className="component-layout-header" style={{ backgroundColor: scrollTop > 0 ? 'blueviolet' : 'transparent' }}>
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