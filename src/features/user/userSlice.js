import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const themes = {
  cmyk: 'cmyk',
  night: 'night',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.cmyk;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { username: 'mia' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      const { cmyk, night } = themes;
      state.theme = state.theme === cmyk ? night : cmyk;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
