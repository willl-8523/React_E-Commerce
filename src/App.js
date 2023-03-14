import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
   
  const Shop = () => {
    return ( 
      <h1>Shop page</h1>
    );
  }

  return (
    <Routes>
      {/* Execute les composants Navigation et Home si le lien se termine par / */}
      <Route path="/" element={<Navigation />}>
        {/* 
          index (index={true ou false}) => afficher le composant lorsque le lien du parent est saisi 
        */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
