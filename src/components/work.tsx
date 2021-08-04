import React from 'react'

interface WorkProps {
    title: string;
    paragraph: string;
}

const Work: React.FC<WorkProps> = ({ title, paragraph }) => {
    return <div className="component-work">
        <div className="component-work__thumbnail"></div>
        <div className="component-work__description">
            <div className="component-work__description-container"></div>
            <div className="component-work__description-title">{title}</div>
            <div className="component-work__description-paragraph">{paragraph}</div>
            <div className="component-work__description-visit">Visit</div>
            <div className="component-work__description-github">Github</div>
        </div>
    </div>
}

export default Work