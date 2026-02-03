import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name: 'Alice',
        email: 'alice@gmail.com'
    },
    {
        name: 'Bob',
        email: 'bob@gmail.com'
    },
    {
        name: 'Charlie',
        email: 'charlie@gmail.com'
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{} // пока ничего не изменяем
})
export default userSlice.reducer;







