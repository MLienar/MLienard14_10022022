import { configureStore } from '@reduxjs/toolkit'
import employeeListReducer from '../features/EmployeeList'

export const store = configureStore({
    reducer: {
        employeeList: employeeListReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
