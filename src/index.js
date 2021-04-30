import React from 'react';
import ReactDOM from 'react-dom';
import 'react-piano/dist/styles.css';

import PianoDemo from './Piano';
import Header from './Header';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';


function App() {
  return (
    <div>
      <Header />
      <div class="w-full p-4 flex min-h-screen">
        <div className="rzow mt-5">
          <div className="col-md-8 offset-md-2">
            <div className="mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
              <PianoDemo audioContext={audioContext} soundfontHostname={soundfontHostname} />
            </div>
          </div>  
        </div>
        <hr className="mt-5" />
      </div>
      <div class="container">
        <div class="m-auto text-center mx-4 w-full">
          <p></p>
        </div>
      </div>
    </div>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
