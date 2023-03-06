import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

const App = () => {
  const Shop = () => {
    return ( 
      <div>
        <h1>Shop page</h1>
      </div>
     );
  }

  return (
    <Routes>
      {/* Execute le composant Home si le lien se termine par / */}
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
