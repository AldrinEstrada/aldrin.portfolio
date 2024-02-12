import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/swindle.module.css'

export default function Swindle() {
    return(
        <main className={styles.body}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Image
                        className={styles.logo}
                        src={'/images/swindle-home-portrait.png'}
                        height={450}
                        width={200}
                    />

                    <div className={styles.tagline}>
                        <Image
                            className={styles.logo}
                            src={'/images/swindle-logo.png'}
                            height={150}
                            width={200}
                        />

                        <button className={styles.tryButton}>
                            <a href="https://big-project-dynamic-content-qefkmnxmo-kushalk04.vercel.app//" target="_blank">Try Out Swindle</a>
                        </button>
                    </div>

                </div>
            </div>

            <div className={styles.overview}>
                <div className={styles.roleInfo}>
                    <div className={styles.role}>
                        <h4>Role for this project:</h4>
                        <div className={styles.roleName}>
                            <p>UX/UI Designer / Front-end Developer</p>
                        </div>

                    </div>

                    <div className={styles.skills}>
                        <h4>Skills utilized for this project:</h4>
                        <p>Figma / Research / Usability Testing</p>
                    </div>
                </div>

                
                <div className={styles.projectIntro}>
                    <p>
                        A scam detector app that asks specific questions to determine if
                        you're being scammed or not. The app also uses the power of OpenAI API in a form of a chatbot
                        that answers questions about cybersecurity for everyday users and gives suggestions based on the severity of the questions.
                    </p>
                </div>
            </div>

            <div className={styles.design}>
                <h3>Design and Ideation</h3>
                <h4>Lo-Fi</h4>
                <div className={styles.lofiImages}>
                    <Image
                        src={'/images/swindle-lofi.png'}
                        height={380}
                        width={1020}
                    />

                    <Image
                        src={'/images/swindle-lofi2.png'}
                        height={550}
                        width={750}
                    />
                </div>

                <p>
                    The idea behind the layout was prioritizing simplicity and accessibility. As the majority of the target audience for the app is towards the elderly, the overall design of the app
                    was made to be readable, and easy to follow as much as possible. The design was created in figma, as well as the planning for the user workflow. As the app focuses on security, the app
                    was structured to allow users to use and referrence as fast as possible.
                </p>

                <h4>Hi-Fi</h4>
                <div className={styles.hifiImages}>
                    <Image
                        src={'/images/swindle-hifi.png'}
                        height={700}
                        width={800}
                    />

                    {/* <Image
                        src={'/images/swindle-hifi2.png'}
                        height={550}
                        width={750}
                    /> */}
                </div>
                <p>With all the colors and components applied, the ideation is now complete. It was time to move on to the coding process and bring the app to life.</p>

            </div>
            <div>
                <h3></h3>
            </div>


            <div className={styles.appOverview}>


                {/* <Image
                    className={styles.logo}
                    src={'/images/swindle-q1-portrait.png'}
                    height={650}
                    width={300}
                />

                <Image
                    className={styles.logo}
                    src={'/images/swindle-wiki-portrait.png'}
                    height={650}
                    width={300}
                /> */}

            </div>
        </main>
    )
}