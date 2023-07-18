

import clsx from 'clsx';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import BodyIndex from './components/bodyIndex/bodyIndex';


function App() {
  return (
    <div className={clsx("App text-center flex justify-center")}>
      <Navbar/>
      <BodyIndex/>
    </div>
  );
}

export default App
