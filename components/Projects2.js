import styles from '@/styles/Projects2.module.css'
import Image from 'next/image';
import React from 'react';

const Projects2 = ({ imagePath, title, description, button }) => (
  <div>
    <div className={styles.card}>
      <div className={styles.Box}>
        <img src={imagePath} alt={title} />
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Link href="/swindle">
        <button className={styles.projectButton}>View Project</button>
      </Link>
    </div>
  </div>
);

export default Projects2;
