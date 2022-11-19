
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './layout';
import Shoes from './pages/Shoes';
import Shoe from './pages/Shoe';
import NewShoe from './pages/newShoe';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/shoes" element={<Layout><Shoes /></Layout>} />
        <Route path="/shoes/:id" element={<Layout><Shoe /></Layout>} />
        <Route path="/shoes/new" element={<Layout><NewShoe /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
