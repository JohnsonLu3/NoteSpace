import {combineReducers} from 'redux';
import NoteReducer from './reducer-notes';
import NoteListener from '../listeners/listener-notes';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    notes: NoteReducer,
    noteListener: NoteListener
});

export default allReducers
