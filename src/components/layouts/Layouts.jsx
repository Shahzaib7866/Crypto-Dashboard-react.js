import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
    
        <Sidebar />
    
      <main className='ml-14 mt-2'>
        {children}
      </main>
    </div>
  );
};

export default Layout;





