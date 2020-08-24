import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import firebase from './config/fbConfig'

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'

import 'firebase/firestore';

import { useSelector} from 'react-redux'
import { isLoaded } from 'react-redux-firebase';

const rffConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
}

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebase)
    )
    );

const rrfProps = {
    firebase,
    useFirestoreForProfile: true,
    config: rffConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="container center"><h4>Loading Screen...</h4></div>;
      return children
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider  {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();