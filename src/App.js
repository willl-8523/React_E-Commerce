import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

const App = () => {
  return (
    <Routes>
      {/* Execute le composant Home si le lien se termine par / */}
      <Route path="/home" element={ <Home /> } />
    </Routes>
  );
};

export default App;
