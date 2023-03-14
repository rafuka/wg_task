import { SliderFlag } from 'components/types';
import { HeavyTanks } from './pages';

const sliderFlags = [
  {
    imgUrl: 'ussr',
    name: 'USSR'
  },
  {
    imgUrl: 'gr',
    name: 'GERMANY',
    selected: true
  },
  {
    imgUrl: 'us',
    name: 'US'
  },
  {
    imgUrl: 'fr',
    name: 'FRANCE'
  },
  {
    imgUrl: 'uk',
    name: 'UNITED KINGDOM'
  },
  {
    imgUrl: 'cz',
    name: 'CZECHOSLOVAKIA'
  }
] as SliderFlag[]

function App() {
  return (
    <div className="App">
      <HeavyTanks
        title="Heavy Tanks"
        ctaSectionTitle="Over 600 vehicles from the largest tank-building superpowers"
        ctaSectionText="Each model has been recreated with surgical precision"
        ctaButtonText="Registration"
        flags={sliderFlags}
      />
    </div>
  );
}

export default App;
