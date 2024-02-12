import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Projects from '/components/Projects'
import Projects2 from '/components/Projects2'
import Projects3 from '/components/Projects3'


export default function Home() {
  return (
    <>
      <Head>
        <title>Aldrin Estrada</title>
        <meta name="description" content="Aldrin Estrada's Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>


      <main className={styles.main}>

        <div className={styles.text}>
          <h1 className={styles.hello}>Hello, I'm</h1>
          <Image
            className={styles.animation}
            src={'/images/portfolio-intro.gif'}
            height={338}
            width={600}
            autoPlay={false}
            controls={true}
          />

          {/* <h2 className={styles.title}>A UX/UI Designer and Web Developer</h2> */}
        </div>

        <Image
          className={styles.logo}
          src={'/images/logo1.png'}
          height={300}
          width={300}
        />


        
        <div className={styles.projectsContainer}>
          <h1 className={styles.projectsTitle}>My Projects</h1>

          <div className={styles.projectsDisplay}>
            <Projects
              imagePath='/images/butterfly.png'
              title="Cocoon"
              description="A career development app that uses the power of AI to scan people's
              resumes and analyze their skills to recommend courses and programs
              required for their desired job industry."
            />

            <Projects2
              imagePath='/images/swindle-logo.png'
              title="Swindle"
              description="A scam detector app that asks specific questions to determine if
              you're being scammed or not. The app will answer questions, give recommendations and nexts steps to take if you are potentially scammed."
            />

            <Projects3
              imagePath='/images/tinypaws-logo.png'
              title="TinyPaws"
              description="A cat adoption website for a non-profit organization, dedicated to saving and taking care of feline friends and ensuring they find new
              homes."
            />
          </div>

        </div>
      </main>
    </>
  )
}
