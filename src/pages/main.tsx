import React from 'react'
// import Particles from 'react-tsparticles'
import { Layout, Skill, Work } from '../components'
import AvatarSource from '../assets/images/avatar.jpg'
import LinkedInLogo from '../assets/images/icons/linkedin-logo.svg'
import GithubLogo from '../assets/images/icons/github-logo.svg'


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

            <div className="page-main__section-4">
                <h2 className="page-main__section-4__title section-title">ABOUT ME</h2>

                <div className="page-main__section-4__panel">
                    <div className="page-main__section-4__panel-left">
                        <img src={AvatarSource} className="page-main__section-4__panel-left__avatar" alt="avatar" />
                    </div>

                    <div className="page-main__section-4__panel-right">
                        I can help You with any stage of App development. It could include initial idea brainstorming, designing, app development and maintenance of an app on App Store. Sometimes I can’t fulfil your wishes alone. In this case, I’m also a capable project manager. I have an extensive network of other freelance developers who can help with more demanding tasks.
                        I love new technologies and am always looking for interesting and challenging projects to work on. Currently I’m digging into Flutter for cross-platform development and SwiftUI for future native iOS projects.
                        Don’t hesitate to contact me if you’re looking for an iOS developer. I can consult you on app development costs, technologies involved and give you a ballpark estimate on your idea rather quick. Later on I’ll be happy to assist you with production of the app.

                        <div className="page-main__section-4__panel-right__social">
                            <img src={LinkedInLogo} alt="linkedin-logo" />
                            <a href="https://www.linkedin.com/in/piao-hu">https://www.linkedin.com/in/piao-hu</a>
                        </div>

                        <div className="page-main__section-4__panel-right__social">
                            <img src={GithubLogo} alt="linkedin-logo" />
                            <a href="https://github.com/redspider926">https://github.com/redspider926</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default PageMain