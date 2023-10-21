import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PersistedState {
  cache: string
  savedCredentials?: {
    tokenTimestamp: number
    login: string
    token: string
  }
}

const initialState = { cache: '' }

export const persisted = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCache(state, { payload: { cache } }: PayloadAction<{ cache: string }>) {
      state.cache = cache
    },
  },
})

export const { setCache } = persisted.actions
