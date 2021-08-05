import React from 'react'
import MobileImage from '../assets/images/ios-android.png'
import WebImage from '../assets/images/web.png'

interface WorkProps {
    title: string;
    paragraph: string;
    visitURL: string;
    githubURL: string;
    thumbnail: string;
    type: 'web' | 'app';
}

const Work: React.FC<WorkProps> = ({ title, paragraph, visitURL, githubURL, thumbnail, type }) => {
    return <div className="component-work">
        <div className="component-work__thumbnail" style={{ backgroundImage: `url(${thumbnail})` }}></div>
        <div className="component-work__description">
            <img className="component-work__description-type" src={type === 'app' ? MobileImage : WebImage} alt="work-type"></img>
            <div className="component-work__description-container" style={{ backgroundColor: type === 'web' ? 'steelblue' : 'indianred' }}></div>
            <div className="component-work__description-title">{title}</div>
            <div className="component-work__description-paragraph">{paragraph}</div>
            <div className="component-work__description-visit" style={{ cursor: visitURL === 'none' ? 'not-allowed' : 'pointer', }}>
                <a href={visitURL} style={{ borderColor: visitURL === 'none' ? '#aaa' : 'white', color: visitURL === 'none' ? '#aaa' : 'white', pointerEvents: visitURL === 'none' ? 'none' : 'visible' }}>Visit</a>
            </div>

            <div className="component-work__description-github" style={{ cursor: githubURL === 'none' ? 'not-allowed' : 'pointer', }}>
                <a href={githubURL} style={{ borderColor: githubURL === 'none' ? '#aaa' : 'white', color: githubURL === 'none' ? '#aaa' : 'white', pointerEvents: githubURL === 'none' ? 'none' : 'visible' }}>Github</a>
            </div>
        </div>
    </div >
}

export default Work