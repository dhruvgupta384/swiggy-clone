import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <div className='header'>
      <div className='logo'>
      <img alt='App-icon' src='https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256'></img>
 </div>
  <div className='nav-items'>
  <ul>
    <li>
      Home
    </li>
    <li>
      About US
    </li>
    <li>
      Contact Us
    </li>
    <li>
      Cart
    </li>
   </ul>
  </div>
 
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;