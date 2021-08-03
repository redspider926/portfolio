import React from 'react'
// import Particles from 'react-tsparticles'
import { Layout, Skill, Work } from '../components'


const PageMain: React.FC = () => {
    return <Layout>
        <div className="page-main">
            <div className="page-main__section-1">
                <div className="page-main__section-1__container">
                    <h1>Successful Development</h1>
                    <h2>Hi. I’m Hu Piao</h2>
                </div>
            </div>

            <div className="page-main__section-2">
                <h2 className="page-main__section-2__title section-title">MY SKILLS</h2>

                <div className="page-main__section-2__skill-group">
                    <Skill title="REACT" value={92} />
                    <Skill title="REACT NATIVE" value={95} />
                    <Skill title="NODEJS" value={87} />
                    <Skill title="SCSS" value={98} />
                    <Skill title="BLOCKCHAIN" value={85} />
                </div>
            </div>

            <div className="page-main__section-3">
                <h2 className="page-main__section-3__title section-title">MY WORKS</h2>

                <div className="page-main__section-3__work-group">
                    <Work title="Health Care App" paragraph="react" />
                    <Work title="Health Care App" paragraph="react" />
                    <Work title="Health Care App" paragraph="react" />
                    <Work title="Health Care App" paragraph="react" />
                </div>
            </div>

            <div className="page-main__section-4"></div>
        </div>
    </Layout>
}

export default PageMain