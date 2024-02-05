
import React from 'react';
import styles from '@/styles/ColorCards.module.css';

const ColorCards = ({ title, content, color }) => {
  return (
    <div className={styles.card}>
        <div className={styles.colorRectangle} style={{ backgroundColor: color }}></div>
        <div className={styles.cardInfo}>
            <p>{content}</p>
        </div>

    </div>
  );
};

export default ColorCards;
