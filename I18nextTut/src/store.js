import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const languageSlice = createSlice({
  name: 'language',
  initialState: { lang: 'en' },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

const persistConfig = {
  key: 'language',
  storage,
};

const persistedReducer = persistReducer(persistConfig, languageSlice.reducer);

export const store = configureStore({
  reducer: {
    language: persistedReducer,
  },
});

export const persistor = persistStore(store);
