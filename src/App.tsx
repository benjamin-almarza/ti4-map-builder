import { Galaxy } from './galaxy/Galaxy';
import './App.css';

function App() {
  return (
    <Galaxy factions={[
      "The Arborec",
      "The Barony of Letnev",
      "The Clan of Saar",
      "The Embers of Muaat" ,
      "The Emirates of Hacan", 
      "The Federation of Sol",
      "The Ghosts of Creuss",
      "Sardakk N'orr"
    ]} mapType={ "warp"} />
  );
}

export default App;
