import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/cocoon.module.css'
import ColorCards from '/components/ColorCards'


export default function Cocoon() {
    return(
        <main>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Image
                        className={styles.logo}
                        src={'/images/cocoon-logo.png'}
                        height={80}
                        width={350}
                    />

                    <div>
                        <h1>You're worth more than you think.</h1>
                    </div>


                </div>

            </div>


            <Image
                className={styles.laptop}
                src={'/images/laptop-mockup.png'}
                height={500}
                width={500}
            />

            <div className={styles.mainContent}>
                <div className={styles.overview}>
                    <div className={styles.roleInfo}>
                        <div className={styles.role}>
                            <h4>Role for this project:</h4>
                            <div>
                                <p>UX/UI Designer</p>
                            </div>

                        </div>

                        <div className={styles.skills}>
                            <h4>Skills utilized:</h4>
                            <div className={styles.tags}>
                                <span className={styles.label}>Figma</span>
                                <span className={styles.label}>Research</span>
                                <span className={styles.label}>Usability Testing</span>
                            </div>

                        </div>
                    </div>

                    <div className={styles.projectIntro}>
                        <p>
                            While all other career development apps focus on providing opportunities for people that are currently already in that industry, what about the ones who are still trying to get there?
                            Or what about the people who are stuck in their current job and got nowhere else to go? Or what about those who are in an industry that is bound to eventually cease to exist?
                            Let's paint a picture for the oil and gas industry as an example. With electric vehicles on the rise, in the next 10-20 years, where would they go?
                            
                        </p>
                    </div>
                </div>

                <div className={styles.projectDescription}>
                    <p> 
                        With all this in mind, Cocoon was created to assist people by not only allowing them to see their full potential, but provide them a detailed roadmap in becoming the person they desire to be.
                        Cocoon is a career development app that uses the power of AI to scan people's
                        resumes and analyze their skills to recommend courses and programs
                        required for their desired job industry.
                    </p>
                </div>


                <div className={styles.overviewVid}>
                    <video className={styles.video} widht="1250" height="625" controls>
                        <source src="/videos/cocoon.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className={styles.challenge}>
                    <h2>The Challenge</h2>
                    <p>
                        Creating Cocoon was a result of consistent weeks of revisions for the concept and layout of the app. The main challenges that tested the team's abilities in designing the app was
                        making a seemless layout that is easy for users to follow based on a workflow of being able to view career paths, upload their resume, see recommendations provided by the AI, and finally,
                        a function or a feature that will allow users to continue coming back and use the app.
                        As every other career development app is providing a similar experience, the idea for cocoon was something that hasn't been successfully done before.
                    </p>
                </div>


                <div className={styles.design}>
                    <div className={styles.lofiText}>
                        <h2>Design Journey</h2>
                        <h3>The Early Stages</h3>
                        <p>
                            The design process started with having a rough design for the ideas on the app's layout. The idea behind the initial designs were to make things have a modern and simple feel 
                            while keeping the flow consistent and easy for users to use. 
                        </p>
                    </div>


                    <div className={styles.lofiImages}>
                        <div className={styles.lofiImages1}>
                            <Image
                                src={'/images/courses.png'}
                                height={390}
                                width={510}
                            />

                            <Image
                                src={'/images/courses-list.png'}
                                height={390}
                                width={510}
                                
                            />
                        </div>

                        <div className={styles.lofiImages2}>
                            <Image
                                src={'/images/courses-info.png'}
                                height={390}
                                width={510}
                                
                            />
                        </div>

                        



                    </div>


                    <div className={styles.hifi}>
                        <div className={styles.hifiText}>
                            <h3>Mastering The Craft</h3>
                            <p>Following weeks of continuous revisions and meetings with the team, the app is finally starting to come to life and take shape. In this stage of the development cycle,
                                the login function was implemented to perfect with the progress tracker. 
                            </p>
                        </div>
                        
                        <div className={styles.hifiImages}>
                            <div className={styles.hifiImages1}>
                                <Image
                                    src={'/images/hifi-careers.png'}
                                    height={390}
                                    width={420}
                                />

                                <Image
                                    src={'/images/hifi-info.png'}
                                    height={390}
                                    width={510}
                                />
                            </div>

                            <div className={styles.hifiImages2}>
                                <Image
                                    src={'/images/hifi-profile.png'}
                                    height={550}
                                    width={510}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.final}>
                        <div className={styles.finalText}>
                            <h3>Getting In Style</h3>
                            <p>
                                With the ball continuing to roll, the app is now near completion. As all functionality and features for the app are now in place, it's time to finalize and apply the full design that has been envisioned for the app.
                                Starting off with applying the styleguide was initiated to set the tone. 
            
                            </p>
                            
                        </div>

                        
                        <div className={styles.colors}>
                            <h4>Colors</h4>
                            <div className={styles.colorCardsList}>
                                <ColorCards className={styles.colorCard1}  content="#6DB8C5" color="#6DB8C5"/>
                                <ColorCards className={styles.colorCard2}  content="#D0F0F6" color="#D0F0F6"/>
                                <ColorCards className={styles.colorCard3}  content="#DBC2CF" color="#DBC2CF"/>

                            </div>
                        </div>

                        <div className={styles.styleGuide}>

                            <div className={styles.typography}>
                                <h4>Typography</h4>
                                <Image
                                    src={'/images/typography.png'}
                                    height={170}
                                    width={500}
                                />
                            </div>


                            <div className={styles.logos}>
                                <h4>Logos</h4>
                                <div className={styles.logoImages}>
                                    <Image
                                        src={'/images/cocoon-logo.png'}
                                        height={100}
                                        width={410}
                                    />

                                    <Image
                                        src={'/images/butterfly.png'}
                                        height={110}
                                        width={150}
                                    />
                                </div>
                            </div>


                        </div>

                        <p>
                            The colors used for the app was intended to symbolize 'rebirth' and 'limitless' in regards to the options available for the users to get into. 
                            The whole idea was to provide people with a platform that makes them feel that using the app is the start of a new chapter in their life. 
                        </p>


                    </div>

                    <div className={styles.end}>
                        <div className={styles.endText1}>
                            <h2>The Birth of A New App</h2>
                            <p>For the final design, the team felt that there was still something missing that really emphasizes the intent and theme of the app. This lead to one final revision that upon creation, gave that 'it' factor that the
                                team was looking for. The change to a dashboard UI was a step-away from the traditional web-app that gives off a traditional website feel. This allows for a more engaging design that hones in
                                on being a platform that focuses on user's personal improvement, development, and transformation. At this stage, the app is now ready for code.
                            </p>
                        </div>

                        <div className={styles.endFinalImages}>
                            <div className={styles.endImages1}>
                                <Image
                                    src={'/images/final-careers.png'}
                                    height={300}
                                    width={550}
                                />

                                <Image
                                    src={'/images/final-careersInfo.png'}
                                    height={300}
                                    width={550}
                                />

                            </div>

                            <div className={styles.endImages2}>
                                <Image
                                    src={'/images/final-analysisResults.png'}
                                    height={300}
                                    width={550}
                                />

                                <Image
                                    src={'/images/final-progress.png'}
                                    height={300}
                                    width={550}
                                />

                            </div>
                        </div>

                        <div className={styles.finalRemarks}>
                            <h3>The Difficulties</h3>
                            <p>Unfortunately, time was not on the side of team Cocoon during the coding process. Although the final product was not 100% of what the final design was, the app was
                                fully functional and was still ready for delivery and presentation.
                                Cocoon is a metaphor for the stage in a user's life where they are able to transform and become someone new. Much like worms when transitioning into a beautiful butterfly. The 
                                cocoon phase is for a time of dedication where hardship and challenges arise to test one's resolve. Nevertheless, this project was the fruit of the team's labour where knowledge, 
                                dedication, and cooperation were tested. 
                            </p>
                            
                            <button>
                                <a href="https://www.cocoon.quest/" target="_blank">Try Out Cocoon</a>
                            </button>
                        </div>


                    </div>

                    

                </div>
                
                
            </div>




            

        </main>
    )
}