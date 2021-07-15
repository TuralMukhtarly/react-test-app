import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { bookmarksReducer } from "./bookmarksReducer";
import { mainReducer } from "./reducer";

const rootReducer = combineReducers({
    reducer:mainReducer,
    bookmarks:bookmarksReducer
})
// определить автоматически тип всего объекта состояния
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
export default store;