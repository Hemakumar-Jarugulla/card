import React from 'react';
import image from './assets/image.png';
import './App.css';

function App() {
  return (
    <div className='card'>
      <img src={image} className='image' alt='Scenic landscape' />
      <p className='text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>
    </div>
  )
}
export default App;