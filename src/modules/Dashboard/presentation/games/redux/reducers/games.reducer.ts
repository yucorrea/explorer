import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  games: [],
};

export const reducer = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    gamesRequest(state, {payload}: PayloadAction<any>) {
      state.loading = true;
    },
    gamesSuccess(state, {payload}: PayloadAction<any>) {
      state.loading = false;
      state.games = payload;
    },
    gamesError(state, {payload}: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default reducer;
