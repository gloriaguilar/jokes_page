import HeaderResponsive from './Components/Header';
import JokesContainer from './Components/JokesContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderResponsive />
        <Routes>
          <Route path="/" element={<JokesContainer type={'Any'} />} />
          <Route path="/Christmas" element={<JokesContainer type={'Christmas'} />} />
          <Route path="/Spooky" element={<JokesContainer type={'Spooky'} />} />
          <Route path="/Programming" element={<JokesContainer type={'Programming'} />} />
          <Route path="/Dark" element={<JokesContainer type={'Dark'} />} />
          <Route path="/Random" element={<JokesContainer type={'Any'} />} />
          <Route path="/Misc" element={<JokesContainer type={'Misc'} />} />
          <Route path="/Pun" element={<JokesContainer type={'Pun'} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
