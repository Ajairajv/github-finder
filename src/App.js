import  {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './Pages/Home';
import Notfound from './Pages/Notfound';
import About from './Pages/About';
import{GithubProvider} from './context/github/GithubContext'
import {AlterProvider } from './context/alert/AlertContext';

function App() {
  return (
   <GithubProvider>
    <AlterProvider>
      <Router>
         <div className="flex flex-col justify-between h-screen">
             <Navbar/>
             <main className='container mx-auto px-3 pb-12'>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/Notfound' element={<Notfound/>}/>
                  <Route path='/*' element={<Notfound/>}/>

                </Routes>

             </main>

          <Footer/>
         </div>
      </Router>
    </AlterProvider>
   </GithubProvider>
  );
}
export default App;
