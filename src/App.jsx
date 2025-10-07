import './App.css'
import Header from './components/Header';
import Playercard from './components/Card';
import { players } from './players';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <div>
        {players.map((player, index) => (
          <Playercard key={index} player={player}/>
        ))}
      </div>
      <Footer/>
  </>
  )
}

export default App