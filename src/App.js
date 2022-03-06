import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowData from './pages/ShowData';
import CreateData from './pages/CreateData';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/ShowData" element={ <ShowData /> } />
            <Route path="/CreateData" element={ <CreateData /> } />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
