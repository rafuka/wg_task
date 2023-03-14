import { FC } from 'react';
import styles from './index.module.scss';
import * as flagIcons from 'assets/flagIcons';

type FlagProps = {
  imgUrl: 'cz' | 'uk' | 'us' | 'fr' | 'ussr' | 'gr',
  name: string,
  selected?: boolean
};

const Flag: FC<FlagProps> = ({
  imgUrl,
  name,
  selected
}) => {
  return (
    <div className={`${styles.flag} ${selected ? styles.selected : ''}`}>
      <img src={`${flagIcons[imgUrl]}`} alt={`Flag from ${name}`} />
      <p>{name}</p>
    </div>
  );
}

export default Flag