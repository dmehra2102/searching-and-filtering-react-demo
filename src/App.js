import { Route, Routes } from 'react-router';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import ProductPage from './Pages/ProductPage';
import Regsiter from './Pages/Regsiter';

function App() {
  return (
    <div className="App">
		<Navbar />
		<Routes>
			<Route path='/' element={<ProductPage />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path='/register' element={<Regsiter />}></Route>
		</Routes>
    </div>
  );
}

export default App;
