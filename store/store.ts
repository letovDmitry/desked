import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer';
import { SubjectState } from './ducks/subjects/contracts/state';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    subjects: SubjectState,
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)