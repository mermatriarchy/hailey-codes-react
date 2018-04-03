import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//import './semantic/semantic-ui-css/semantic.min.css';

const Root = () => {
	return(
		<App />
	)
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
