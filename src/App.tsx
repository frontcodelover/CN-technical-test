import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Appartment } from './pages/Appartment';
import { NotFound } from './pages/NotFound';
import { Admin } from './pages/Admin';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home appartments={undefined} />} />
          <Route path='/appartment/:id' element={<Appartment />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
