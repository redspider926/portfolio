import React from 'react'

interface SkillProps {
    title: string;
    value: number;
}

const Skill: React.FC<SkillProps> = ({ title, value }) => {
    return <div className="component-skill">
        <div className="component-skill__title">{title}</div>
        <div className="component-skill__chart">
            <div className="component-skill__chart-value" style={{ width: `${value}%` }}>
                <div className="component-skill__chart-value-hover"></div>
            </div>
        </div>
    </div>
}

export default Skill