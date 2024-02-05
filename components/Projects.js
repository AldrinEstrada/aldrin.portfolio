import styles from '@/styles/Projects.module.css'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'

const Projects = ({ imagePath, title, description, button }) => (
  <div>
    <div className={styles.card}>
      <div className={styles.Box}>
        <img src={imagePath} alt={title} />
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h4>Case Study</h4>
        <p>{description}</p>
      </div>
      
      <Link href="/cocoon">
        <button className={styles.projectButton}>View Project</button>
      </Link>
    </div>
  </div>
);

export default Projects;
