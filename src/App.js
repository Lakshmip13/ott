 import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Addmovie from "./components/Addmovie";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Moviedetails from './components/Moviedetails';
import Favorites from './components/Favorites';
import Searchpage from './components/Searchpage';
import Editmovie from './components/Editmovie';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
      <Route path="/add" element={<Addmovie/>}/>
      <Route path='/moviedetails/:id' element={<Moviedetails/>}/>
      <Route path='/fav' element={<Favorites/>}/>
      <Route path='/search/:searchword' element={<Searchpage/>}/>
      <Route path='/edit/:id' element={<Editmovie/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
