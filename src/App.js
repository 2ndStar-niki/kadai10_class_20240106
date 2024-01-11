import React from 'react';
import Sidebar from './components/Sidebar';
import LeafletMap from './components/LeafletMap';

import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar style={{ width: '250px', height: '100vh', overflowY: 'auto' }} />
      <LeafletMap style={{ flexGrow: 1, height: '100vh' }} />
    </div>
    </>
  );
}

export default App;