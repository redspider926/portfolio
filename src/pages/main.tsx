import React from 'react'
import Scroll from 'react-scroll'
import { Layout, Work } from '../components'
import AvatarSource from '../assets/images/avatar.jpg'
import LinkedInLogo from '../assets/images/icons/linkedin.svg'
import GithubLogo from '../assets/images/icons/github.svg'
import MailLogo from '../assets/images/icons/mail.svg'

import VirexImage from '../assets/images/virex.png'
import SeededImage from '../assets/images/seeded.png'
import KuulImage from '../assets/images/kuul.png'
import ChownowDiscoverImage from '../assets/images/chownow-discover.png'
import ChownowOrderingImage from '../assets/images/chownow-ordering.png'

import LettuceImage from '../assets/images/lettuce.png'
import FinimizeImage from '../assets/images/finimize.png'
import MercuryImage from '../assets/images/mercury.png'
import SostavImage from '../assets/images/sostav.png'

import ReactLogo from '../assets/images/icons/react.svg'
import VueLogo from '../assets/images/icons/vue.svg'
import EthereumLogo from '../assets/images/icons/ethereum.svg'
import NodeLogo from '../assets/images/icons/node.svg'

const Element = Scroll.Element;

const PageMain: React.FC = () => {
    return <Layout>
        <div className="page-main">
            <Element name="home">
                <div className="page-main__section-1">
                    <div className="page-main__section-1__container">
                        <h1>Successful Development</h1>
                        <h2>I am developer who has experience +7 years.</h2>
                    </div>
                </div>
            </Element>

            <Element name="skill">
                <div className="page-main__section-2">
                    <h2 className="page-main__section-2__title section-title">MY SKILLS</h2>

                    <div className="page-main__section-2__skill-group">
                        <div className="page-main__section-2__skill-group__part">
                            <div className="page-main__section-2__skill-group__part-container">
                                <img className="skill" alt="skill-react" src={ReactLogo} />
                                <div className="page-main__section-2__skill-group__part-container-title">React Frontend Development</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">React + Redux + Typescript</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">React + Webpack + Code Obfuscation</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Next + TailWind.css + Storybook</div>
                            </div>
                        </div>

                        <div className="page-main__section-2__skill-group__part">
                            <div className="page-main__section-2__skill-group__part-container">
                                <img className="skill" alt="skill-vue" src={VueLogo} />
                                <div className="page-main__section-2__skill-group__part-container-title">Vue Development</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Vue + Vuex + Typescript</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Vuetify</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Vue + TailWind CSS</div>
                            </div>
                        </div>

                        <div className="page-main__section-2__skill-group__part">
                            <div className="page-main__section-2__skill-group__part-container">
                                <img className="skill" alt="skill-react" src={ReactLogo} />
                                <div className="page-main__section-2__skill-group__part-container-title">React Native Development</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Android, iOS</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Native Module</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Unit Testing</div>
                            </div>
                        </div>

                        <div className="page-main__section-2__skill-group__part">
                            <div className="page-main__section-2__skill-group__part-container">
                                <img className="skill" alt="skill-blockchain" src={EthereumLogo} />
                                <div className="page-main__section-2__skill-group__part-container-title">BlockChain</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Web3 + React Frontend</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Smart Contract Deploy</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Token Swap</div>
                            </div>
                        </div>

                        <div className="page-main__section-2__skill-group__part">
                            <div className="page-main__section-2__skill-group__part-container">
                                <img className="skill" alt="skill-blockchain" src={NodeLogo} />
                                <div className="page-main__section-2__skill-group__part-container-title">Nodejs based Backend</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Express + Mongodb/MySql/Postgres</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Express + Soket.io</div>
                                <div className="page-main__section-2__skill-group__part-container-paragraph">Express + Typeform</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            <Element name="work">
                <div className="page-main__section-3">
                    <h2 className="page-main__section-3__title section-title">MY WORKS</h2>

                    <div className="page-main__section-3__work-group">
                        <Work title="Website-Virex" paragraph="React, Scss, Typescript" visitURL="https://virex-landing.herokuapp.com/" githubURL="https://github.com/redspider926/VIREX" thumbnail={VirexImage} type="web" />
                        <Work title="Website-Seeded" paragraph="React, Scss, Typescript" visitURL="https://seeded-landing.herokuapp.com/" githubURL="https://github.com/redspider926/SEEDED" thumbnail={SeededImage} type="web" />
                        <Work title="Website-Kuul.Finance" paragraph="React, Scss, Material-UI, Typescript" visitURL="https://kuul-finance.herokuapp.com/" githubURL="https://github.com/redspider926/KULL_FINANCE" thumbnail={KuulImage} type="web" />
                        <Work title="Website-ChowNow Discover" paragraph="React, Python" visitURL="https://eat.chownow.com/" githubURL="none" thumbnail={ChownowDiscoverImage} type="web" />
                        <Work title="Website-ChowNow Ordering" paragraph="React, Python" visitURL="https://direct.chownow.com" githubURL="none" thumbnail={ChownowOrderingImage} type="web" />

                        <Work title="Mobile App-Lettuce" paragraph="React native, Javascript, firebase" visitURL="none" githubURL="https://github.com/redspider926/Lettuce" thumbnail={LettuceImage} type="app" />
                        <Work title="Mobile App-Finimize" paragraph="React native, Javascript" visitURL="https://play.google.com/store/apps/details?id=com.finimize.oban&hl=en_US&gl=US" githubURL="none" thumbnail={FinimizeImage} type="app" />
                        <Work title="Mobile App-Mercury" paragraph="React native, Javascript, Bridgefy-SDK, firebase" visitURL="https://play.google.com/store/apps/details?id=com.mercurio" githubURL="https://github.com/redspider926/mercury.io" thumbnail={MercuryImage} type="app" />
                        <Work title="Mobile App-Sostav" paragraph="React native, Javascript, firebase" visitURL="none" githubURL="https://github.com/redspider926/Sostav" thumbnail={SostavImage} type="app" />
                    </div>
                </div>
            </Element>

            <Element name="about">
                <div className="page-main__section-4">
                    <h2 className="page-main__section-4__title section-title">ABOUT ME</h2>

                    <div className="page-main__section-4__panel">
                        <div className="page-main__section-4__panel-left">
                            <img src={AvatarSource} className="page-main__section-4__panel-left__avatar" alt="avatar" />
                        </div>

                        <div className="page-main__section-4__panel-right">
                            Since beginning my journey as a freelance developer nearly 7 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
                        <div className="page-main__section-4__panel-right__social">
                                <img src={LinkedInLogo} alt="linkedin-logo" />
                                <a href="https://www.linkedin.com/in/piao-hu">https://www.linkedin.com/in/piao-hu</a>
                            </div>

                            <div className="page-main__section-4__panel-right__social">
                                <img src={GithubLogo} alt="linkedin-logo" />
                                <a href="https://github.com/redspider926">https://github.com/redspider926</a>
                            </div>

                            <div className="page-main__section-4__panel-right__social">
                                <img src={MailLogo} alt="linkedin-logo" />
                                <a href="mailto:stonetiger1225@gmail.com">stonetiger1225@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </div>
    </Layout>
}

export default PageMain