import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <main className="container-fluid">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </main>
  );
}

export default App;
