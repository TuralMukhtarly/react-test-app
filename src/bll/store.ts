import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

const rootReducer = combineReducers({
    reducer:mainReducer
})
// определить автоматически тип всего объекта состояния
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
export default store;