import React, { FC } from 'react';
import { CTAButton, TanksDisplay, Slider } from 'components';
import { SliderFlag } from 'components/types';
import styles from './index.module.scss';

type HeavyTanksProps = {
  flags: SliderFlag[],
  title: string,
  ctaSectionTitle: string,
  ctaSectionText: string,
  ctaButtonText: string
};

const HeavyTanks: FC<HeavyTanksProps> = ({
  flags,
  title,
  ctaSectionTitle,
  ctaSectionText,
  ctaButtonText
}) => {
  return (
    <div className={styles.heavyTanks}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.innerWrapper}>
        <div className={styles.ctaSection}>
          <h2>{ctaSectionTitle}</h2>
          <p>{ctaSectionText}</p>
          <div className={styles.ctaButtonWrapper}>
            <CTAButton text={ctaButtonText} />
          </div>
        </div>
        <TanksDisplay
          selectedName="GERMANY"
          tanksNumber={128}
          numberDescription="German vehicles in the game"
          tanksList={['Stug III', 'PANTHER', 'MAUS', 'TIGER', 'PZ.III']}
        />
      </div>
      <Slider flags={flags} />
    </div>
  );
}

export default HeavyTanks;