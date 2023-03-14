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
      <ArrowButton direction="left" />
      <div className={styles.flags}>
        {flags.map(flag => <Flag {...flag} />)}
      </div>
      <ArrowButton />
    </div>
  );
}

export default Slider;