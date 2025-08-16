import { create } from 'zustand';

import { createSelectors } from '@/lib/utils';
import { type Settings } from '@/types/settings';

import { getSettings, writeSettings } from './utils';

interface AccountState {
  settings: Settings;
  readSettings: () => void;
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const _useSetting = create<AccountState>((set, get) => ({
  settings: {
    favorite: [],
  },
  addFavorite: (id: string) => {
    set((state) => ({
      settings: { favorite: [...state.settings.favorite, id] },
    }));
    writeSettings(get().settings);
  },
  removeFavorite: (id: string) => {
    set((state) => ({
      settings: {
        favorite: state.settings.favorite.filter((item) => item !== id),
      },
    }));
    writeSettings(get().settings);
  },
  readSettings: () => {
    set((state) => ({ settings: getSettings() || state.settings }));
  },
}));

export const useSetting = createSelectors(_useSetting);
export const readSettings = () => _useSetting.getState().readSettings();
export const addFavorite= _useSetting.getState().addFavorite;
export const removeFavorite =  _useSetting.getState().removeFavorite;
