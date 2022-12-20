import { createSlice } from "@reduxjs/toolkit";

const initialGlobalVariables = {
    walletSelected: false,
    walletAddress: ""
}

const GlobalVariables = createSlice({
    name: 'GlobalVariables',
    initialState: initialGlobalVariables,
    reducers: {
        setWalletSelected(state, action){
            state.walletSelected = action.payload
        },
        setWalletAddress(state, action){
            state.walletAddress = action.payload
        }
    }
});

export const GlobalVariablesAction = GlobalVariables.actions;

export default GlobalVariables.reducer;