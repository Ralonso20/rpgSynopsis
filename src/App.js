//import logo from './logo.svg';
import './App.css';
import { Synopsis } from './componentes/Synopsis'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Encuentra una historia a tu gusto</h1>
        <Synopsis
          imageName='octopath'
          name='Octopath Traveler'
          realeseDate='July 13, 2018'
          textSynopsis='Eight travelers. Eight adventures. Eight roles to play in a new world brought to life by Square Enix. Explore each traveler’s story and use their abilities in and out of battle. Will you expand your horizons as the Merchant or track down a traitor as the Warrior? Where will you go? Who will join you? You alone can choose your path.'
        />

        <Synopsis
          imageName='fet'
          name='Fire Emblem Three Hauses'
          realeseDate='July 26, 2019'
          textSynopsis='War is coming to the continent of Fódlan. Here, order is maintained by the Church of Seiros, which hosts the prestigious Officer’s Academy within its headquarters. You are invited to teach one of its three mighty houses, each comprised of students brimming with personality and represented by a royal from one of three territories. As their professor, you must lead your students in their academic lives and in turn-based, tactical RPG battles wrought with strategic, new twists to overcome. Which house, and which path, will you choose?'
        />

        <Synopsis
          imageName='trails'
          name='Trails in the sky SC'
          realeseDate='28 August 2007'
          textSynopsis='Picking up shortly after The Legend of Heroes: Trails in the Sky, Estelle travels across Liberl in search of Joshua. The journey involves more than seeking loved ones, however, as the Bracer Guild also tasks her with unraveling the mysteries behind the newly unveiled Society of Ouroboros.'
        />
      </div>
    </div>
  );
}

export default App;
