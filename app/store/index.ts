import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {authReducer} from './reducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['authReducer'],
};

const customMiddleWare = () => (next: any) => (action: any) => {
    next(action);
};

const reducers = combineReducers({
    authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(thunk, customMiddleWare)),
);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
