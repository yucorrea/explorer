import {PayloadAction} from '@reduxjs/toolkit';
import {takeLatest, put, call} from 'redux-saga/effects';

import gamesSlice from '~/modules/Dashboard/presentation/games/redux/reducers/games.reducer';
import HttpService, {FetchGamesParams} from '~/modules/Dashboard/services/api';

function* fetchAllGames({payload}: PayloadAction<FetchGamesParams>) {
  try {
    const service = new HttpService();

    const response: Generator<any, any, any> = yield call(
      [service, 'fetchGames'],
      payload,
    );

    yield put(gamesSlice.actions.gamesSuccess(response));
  } catch (e) {
    yield put(gamesSlice.actions.gamesError('Falha ao buscar jogos'));
  }
}

export default function* rootSagas() {
  yield takeLatest(gamesSlice.actions.gamesRequest, fetchAllGames);
}

/**
 * Genarator
 * yield call([instance, 'method'], 'params')
 */
