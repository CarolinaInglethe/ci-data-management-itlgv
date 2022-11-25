import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowData from './pages/ShowData';
import Form from './pages/Form';
import InfoProvider from './context/infoProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <InfoProvider >
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/ShowData" element={ <ShowData /> } />
            <Route path="/Form" element={ <Form /> } />
          </Routes>
        </InfoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
