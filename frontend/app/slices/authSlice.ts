import { createSlice, PayloadAction  } from '@reduxjs/toolkit'


interface User {
    id: string
    username: string
    email: string
}

interface AuthState {
    user: User | null
}


const initialState: AuthState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
}

const authSlice = createSlice({
    name: 'auth', // put any name
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        removeCredentials: (state, action) => {
            state.user = null
            localStorage.removeItem('user')
        },
    },
})


export default authSlice.reducer
export const { setCredentials, removeCredentials } = authSlice.actions