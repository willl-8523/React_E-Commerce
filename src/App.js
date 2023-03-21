import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Ckeckout from './routes/checkout/checkout.component';

const App = () => {

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
        <Route path='checkout' element={<Ckeckout />} />
      </Route>
    </Routes>
  );
};

export default App;
