import React from 'react';
import ReactDOM from 'react-dom';
import 'react-piano/dist/styles.css';

import PianoDemo from './Piano';


// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


function App() {
  return (
    <div>
      <div class="m-auto text-center mx-4 w-full">
        <h1>Piano Final Project</h1>
      </div>
      <div class="w-full p-4 flex min-h-screen">
        <div className="rzow mt-5">
          <div className="col-md-8 offset-md-2">
            <div className="mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <PianoDemo audioContext={audioContext} soundfontHostname={soundfontHostname} />
            </div>
          </div>  
        </div>
      </div>
      <div class="container">
        <div class="m-auto text-center mx-4 w-full">
          <p>Use the keys on your keyboard that correspond to the letters on the keys to play the notes! 
              Shift the starting the starting note with the left and right arrow keys! 
          </p>
        </div>
      </div>
      <div class = "container">
        <div class="m-auto text-center mx-4 w-full">
          <p>Made by Neal Gandhi using React</p>
        </div>
      </div>
    </div>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
