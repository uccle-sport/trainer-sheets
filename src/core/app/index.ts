import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TrainerAppState {
  active: boolean
}

const initialState = { active: false } as TrainerAppState

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    activate(state, { payload: boolean }: PayloadAction<boolean>) {
      state.active = boolean
    },
  },
})

export const { activate } = app.actions
