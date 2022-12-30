import { Action } from "redux";
import { LoadingState, SubjectState } from "./contracts/state";

export enum SubjectsActionTypes {
    SET_SUBJECTS_DATA = 'subjects/SET_SUBJECTS_DATA',
    FETCH_SUBJECTS_DATA = 'subjects/FETCH_SUBJECTS_DATA',
    SET_SUBJECTS_LOADING_STATE = 'subjects/SET_SUBJECTS_LOADING_STATE',
}

export interface SetSubjectsDataActionInterface extends Action<SubjectsActionTypes> {
    type: SubjectsActionTypes.SET_SUBJECTS_DATA,
    payload: SubjectState['items']
}

export interface FetchSubjectsDataActionInterface extends Action<SubjectsActionTypes> {
    type: SubjectsActionTypes.FETCH_SUBJECTS_DATA,
}

export interface SetSubjectsLoadingStateActionInterface extends Action<SubjectsActionTypes> {
    type: SubjectsActionTypes.SET_SUBJECTS_LOADING_STATE,
    payload: LoadingState
}

export const setSubjectsData = (payload: SubjectState['items']): SetSubjectsDataActionInterface => ({
    type: SubjectsActionTypes.SET_SUBJECTS_DATA,
    payload
})

export const setSubjectsLoadingState = (payload: LoadingState): SetSubjectsLoadingStateActionInterface => ({
    type: SubjectsActionTypes.SET_SUBJECTS_LOADING_STATE,
    payload
})

export const fetchSubjectsData = (): FetchSubjectsDataActionInterface => ({
    type: SubjectsActionTypes.FETCH_SUBJECTS_DATA,
})

export type SubjectsActions = SetSubjectsDataActionInterface | FetchSubjectsDataActionInterface | SetSubjectsLoadingStateActionInterface