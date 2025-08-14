import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate
} from 'react-router-dom';
import {Homeo} from './pages/Homeo'
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Dashboard } from './pages/Dashboard';
import { SendMoney } from './pages/SendMoney';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;