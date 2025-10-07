import './App.css'
import Header from './components/Header';
import Playercard from './components/Card';
import { players } from './players';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Playercard></Playercard>
      {players.map((item,index) => {
        <Playercard key={index} player={item} /> 
      })}
      <Footer/>
  </>
  )
}

export default App