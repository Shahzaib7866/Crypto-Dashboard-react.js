import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Mywallet from './pages/Mywallet'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/bars/Navbar';
// import Sidebar from './components/bars/Sidebar';
import './index.css';


function App() {

  return (
   
   <BrowserRouter>
   {/* <Navbar /> */}
   {/* <Sidebar /> */}
    <Routes>    
       <Route path='/' exact={true} element={<Dashboard />}/>
       <Route path='/mywallet' exact={true} element={<Mywallet />}/>


   </Routes>
   </BrowserRouter>
    
  )
}

export default App


 