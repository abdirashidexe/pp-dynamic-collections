import './App.css'
import Header from './components/Header';
import Playercard from './components/Card';
import { players } from './players';

function App() {
  return (
    <>
      <div style={{ padding: "2rem", fontFamily: "Poppins, sans-serif" }}>
      <Header/>
      <Playercard></Playercard>
      {players.map((item,index) => {
        <Playercard key={index} player={item} /> 
      })}
      <footer>
        <p>© 2025</p>
      </footer>
      </div>
  </>
  )
}

export default App