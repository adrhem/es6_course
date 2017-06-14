//https://facebook.github.io/react/docs/installation.html#creating-a-new-application
import React from 'react';
import ReactDOM from 'react-dom';
import SimpleMapPage from './SimpleMapPage';

ReactDOM.render(
<SimpleMapPage 
    center = {[20.6539184, -103.3279985]}
    zoom = {12}
 />, document.getElementById("content"));
