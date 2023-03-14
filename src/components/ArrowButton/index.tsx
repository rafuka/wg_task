import arrowIcon from 'assets/arrowIcon.svg';
import { ReactComponent as ArrowIcon } from 'assets/arrowIcon.svg';
import { FC } from 'react';
import styles from './index.module.scss';

type ArrowButtonProps = {
  direction?: "left" | "right"
};

const ArrowButton: FC<ArrowButtonProps> = ({
  direction = 'right'
}) => {
  return (
    <button className={`${styles.arrowBtn} ${styles[direction] || ''}`}>
      <ArrowIcon />
    </button>
  );
}

export default ArrowButton