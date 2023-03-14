import React, { FC } from 'react';
import styles from './index.module.scss';

type TanksDisplayProps = {
  selectedName: string,
  tanksNumber: number,
  numberDescription: string,
  tanksList: string[]
};

const TanksDisplay: FC<TanksDisplayProps> = ({
  selectedName,
  tanksNumber,
  numberDescription,
  tanksList
}) => {
  return (
    <div className={styles.tanksDisplay}>
      <div className={styles.countryName}>{selectedName}</div>
      <div className={styles.valueWrapper}>
        <div className={styles.tanksNumber}>{tanksNumber}</div>
        <p className={styles.description}>{numberDescription}</p>
        <div className={styles.tanksList}>{tanksList.map((tank, idx) =>
          <span>{tank}{`${idx < tanksList.length - 1 ? ', ' : ''}`}</span>)}
        </div>
      </div>
    </div>
  );
};

export default TanksDisplay;