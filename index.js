/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store, {persistor} from '@store';
import {PersistGate} from 'redux-persist/integration/react';

const Root = () => {
    return (
        <Provider store={store}>
            <StatusBar style="dark" />
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Root);
