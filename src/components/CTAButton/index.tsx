import React, { FC } from 'react';
import styles from './index.module.scss';

type CTAButtonProps = {
  text: string
};

const CTAButton: FC<CTAButtonProps> = ({
  text
}) => {
  return (
    <button className={styles.ctaButton}>{text}</button>
  );
};

export default CTAButton;