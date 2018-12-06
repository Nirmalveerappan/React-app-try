import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RandomQuoteMachine from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RandomQuoteMachine />, document.getElementById('root'));
registerServiceWorker();
