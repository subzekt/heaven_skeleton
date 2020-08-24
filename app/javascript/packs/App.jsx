import React from 'react';
import ReactDOM from 'react-dom';
import HeavenApp from '../heaven';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HeavenApp />,
    document.body.appendChild(document.createElement('div')),
  );
});
