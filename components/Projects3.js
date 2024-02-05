import styles from '@/styles/Projects3.module.css'
import Image from 'next/image';
import React from 'react';

const Projects3 = ({ imagePath, title, description, button }) => (
  <div>
    <div className={styles.card}>
      <div className={styles.Box}>
        <img src={imagePath} alt={title} />
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className={styles.projectButton}>View Project</button>
    </div>
  </div>
);

export default Projects3;
