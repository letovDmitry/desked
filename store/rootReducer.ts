import { combineReducers } from "redux";
import { subjectsReducer } from "./ducks/subjects/reducer";

export const rootReducer = combineReducers({
    subjects: subjectsReducer,
})