import { FC } from 'react';
import styles from './index.module.scss'
import { ArrowButton, Flag } from 'components';
import { SliderFlag } from 'components/types';


type SliderProps = {
  flags: SliderFlag[]
};

const Slider: FC<SliderProps> = ({
  flags
}) => {
  return (
    <div className={styles.slider}>
      <div className={styles.arrowBtnWrapper}>
        <ArrowButton direction="left" />
      </div>
      <div className={styles.flags}>
        {flags.map(flag => <Flag {...flag} />)}
      </div>
      <div className={styles.arrowBtnWrapper}>
        <ArrowButton />
      </div>
    </div>
  );
}

export default Slider;