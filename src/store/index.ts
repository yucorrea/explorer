import {createStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import gamesSlice from '~/modules/Dashboard/presentation/games/redux/reducers/games.reducer';
import gamesSaga from '~/modules/Dashboard/presentation/games/redux/sagas/games.saga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  games: gamesSlice.reducer,
});

const sagas = function* () {
  yield all([gamesSaga()]);
};

const Store = createStore(reducers, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof Store.getState>;

sagaMiddleware.run(sagas);

export {Store};
