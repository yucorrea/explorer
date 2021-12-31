import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '~/store';

const RootStateGames = (state: RootState) => state.games;

export const gamesSelector = createSelector(RootStateGames, appState => {
  return appState.games;
});

export const gamesLoadingSelector = createSelector(RootStateGames, appState => {
  return appState.loading;
});

export const gamesErrorSelector = createSelector(RootStateGames, appState => {
  return appState.error;
});
