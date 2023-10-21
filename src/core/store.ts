import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persisted, setCache } from './persisted'
import { app } from './app'

/**
 * ## configureStore
 * @param {Object} the state
 */

export const store = configureStore({
  reducer: {
    app: app.reducer,
    persisted: persisted.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(
      thunk,
      //logger,
    ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
