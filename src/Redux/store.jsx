import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./CounterReducer";
// Persisting materaial imported
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Combining reducers into root reducer
const RootReducer = combineReducers({
    counterReducer: CounterSlice.reducer
})

const persistconfig = {
    key:'Root',
    storage,
}

const persistedReducer = persistReducer(persistconfig,RootReducer)

export const Store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(Store);