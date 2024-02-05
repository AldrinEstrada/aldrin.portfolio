import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/swindle.module.css'

export default function Swindle() {
    return(
        <main>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Image
                        className={styles.logo}
                        src={'/images/swindle-logo.gif'}
                        height={338}
                        width={600}
                    />
                </div>
            </div>

            <div className={styles.overview}>
                <div className={styles.roleInfo}>
                    <div className={styles.role}>
                        <h4>Role for this project:</h4>
                        <div className={styles.roleName}>
                            <p>UX/UI Designer, Front-end Developer</p>
                        </div>

                    </div>

                    <div className={styles.skills}>
                        <h4>Skills utilized for this project:</h4>
                        <div className={styles.skillTags}>
                            <div className={styles.tags1}>
                                <span className={styles.label}>Figma</span>
                                <span className={styles.label}>Research</span>
                                <span className={styles.label}>Usability Testing</span>
                                
                            </div>
                            <div className={styles.tags2}>
                                <span className={styles.label}>Front-end Developoer</span>
                            </div>
                        </div>

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
        </main>
    )
}