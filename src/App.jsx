import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './components/NavTab';
import Footer from './components/Footer';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
