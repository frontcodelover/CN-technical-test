import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Appartment } from './pages/Appartment';
import { NotFound } from './pages/NotFound';
import { Admin } from './pages/Admin';
import Layout from './components/layout/Layout';
import { Login } from './pages/Login';
import { UserProvider } from './context/UserContext';
import { AddAppartment } from './components/admin/AddAppartment';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home appartments={undefined} />} />
            <Route path='/appartment/:id' element={<Appartment id={0} address={''} description={''} img={''} price={0} name={''} />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='admin/addappartment' element={<AddAppartment />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
};

export default App;
