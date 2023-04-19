import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <Navbar />
        <div>
       {/* {leftbar} */}
        {/* {rightbar} */}
        </div>
        
      </div>
    </div>
  );
}

export default App;
