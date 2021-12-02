import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Addproduct from './Components/Addproduct';
import Updateproduct from './Components/Updateproduct';
import Protected from './Components/Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="add" element={<Protected Compo={Addproduct}/>} />
          <Route path="update" element={<Protected Compo={Updateproduct}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
