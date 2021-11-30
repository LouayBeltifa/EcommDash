import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Addproduct from './Components/Addproduct';
import Updateproduct from './Components/Updateproduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>Ecomm Project</h1>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="add" element={<Addproduct />} />
          <Route path="update" element={<Updateproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
