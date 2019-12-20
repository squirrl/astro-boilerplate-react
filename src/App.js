import React , { Component, Fragment } from 'react';
import logo from './logo.svg';
import RuxClock from '../node_modules/@astrouxds/rux-clock';
import RuxGlobalStatusBar from '../node_modules/@astrouxds/rux-global-status-bar';
import '../src/assets/astro/astro.core.min.css'

function App() {
  return (
    <Fragment>
    <div class="app-container">
      <rux-global-status-bar appName="Astro React Bootstrap">
        <rux-clock></rux-clock>
      </rux-global-status-bar>
    </div>
    </Fragment>   
  );
}

export default App;
