import React from 'react'
import Scroll from 'react-scroll'
import { useScrollTop } from '../hooks'

import HomeIcon from '../assets/images/icons/home.svg'
import SkillIcon from '../assets/images/icons/skill.svg'
import WorkIcon from '../assets/images/icons/work.svg'
import AboutIcon from '../assets/images/icons/about.svg'

const Layout: React.FC = ({ children }) => {
    const scrollTop = useScrollTop();

    const scroller = Scroll.scroller;
    const options = {
        duration: 700,
        delay: 100,
        smooth: true,
    }

    return <div className="component-layout">
        <div className="component-layout-header" style={{ backgroundColor: scrollTop > 0 ? 'blueviolet' : 'transparent' }}>
            <div className="component-layout-header__nav">
                <div className="component-layout-header__nav-item" onClick={() => {
                    scroller.scrollTo('home', options);
                }}>
                    HOME
                </div>
                <div className="component-layout-header__nav-item" onClick={() => {
                    scroller.scrollTo('skill', options);
                }}>
                    SKILLS
                </div>
                <div className="component-layout-header__nav-item" onClick={() => {
                    scroller.scrollTo('work', options);
                }}>
                    WORKS
                </div>
                <div className="component-layout-header__nav-item" onClick={() => {
                    scroller.scrollTo('about', options);
                }}>
                    ABOUT
                </div>
                {/* <div className="component-layout-header__nav-item">
                    CONTACT
                </div> */}
            </div>

            <div className="component-layout-header__nav-mobile">
                <img src={HomeIcon} alt="home-icon" width={25} onClick={() => {
                    scroller.scrollTo('home', options);
                }} />
                <img src={SkillIcon} alt="skills-icon" width={25} onClick={() => {
                    scroller.scrollTo('skill', options);
                }} />
                <img src={WorkIcon} alt="works-icon" width={25} onClick={() => {
                    scroller.scrollTo('work', options);
                }} />
                <img src={AboutIcon} alt="about-icon" width={25} onClick={() => {
                    scroller.scrollTo('about', options);
                }} />
            </div>
        </div>
        {children}
    </div>
}

export default Layout