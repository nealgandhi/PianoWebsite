import React from 'react';
import ReactDOM from 'react-dom';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

import PianoDemo from './Piano';
import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';


// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

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
              Shif the starting the starting note with the left and right arrow keys!
          </p>
        </div>
      </div>
    </div>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
