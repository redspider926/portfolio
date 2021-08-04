import React from 'react'

interface WorkProps {
    title: string;
    paragraph: string;
    visitURL: string;
    githubURL: string;
    thumbnail: string;
}

const Work: React.FC<WorkProps> = ({ title, paragraph, visitURL, githubURL, thumbnail }) => {
    return <div className="component-work">
        <div className="component-work__thumbnail" style={{ backgroundImage: `url(${thumbnail})` }}></div>
        <div className="component-work__description">
            <div className="component-work__description-container"></div>
            <div className="component-work__description-title">{title}</div>
            <div className="component-work__description-paragraph">{paragraph}</div>
            <a className="component-work__description-visit" href={visitURL}>Visit</a>
            <a className="component-work__description-github" href={githubURL}>Github</a>
        </div>
    </div>
}

export default Work