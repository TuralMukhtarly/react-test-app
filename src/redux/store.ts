import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

const rootReducer = combineReducers({
  reducer: mainReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>;

export default store;
