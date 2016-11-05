import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer 
import rootReducer from './reducers/index';

// fake data
import comments from './data/commets';
import posts from './data/posts';

// create an object for the default data 
const defaultState = {
	comments,
	posts 
};

const store = createStore(rootReducer, defaultState);

export  const history = syncHistoryWithStore(browserHistory, store);

export default store;