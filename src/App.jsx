import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/bars/Navbar';
import Sidebar from './components/bars/Sidebar';
import './index.css';


function App() {

  return (
   
   <BrowserRouter>
   <Navbar />
   <Sidebar />
    <Routes>    
       <Route path='/' exact={true} element={<Dashboard />}/>


   </Routes>
   </BrowserRouter>
    
  )
}

export default App


 