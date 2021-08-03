import React from 'react'
// import Particles from 'react-tsparticles'
import { Layout, Skill } from '../components'


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
                    <Skill title="REACT" value={100} />
                    <Skill title="REACT NATIVE" value={95} />
                    <Skill title="NODEJS" value={50} />
                    <Skill title="SCSS" value={50} />
                    <Skill title="BLOCKCHAIN" value={50} />
                    <Skill title="react" value={50} />
                </div>
            </div>

            <div className="page-main__section-3">
                <h2 className="page-main__section-3__title section-title">MY WORKS</h2>
            </div>

            <div className="page-main__section-4"></div>
        </div>
    </Layout>
}

export default PageMain