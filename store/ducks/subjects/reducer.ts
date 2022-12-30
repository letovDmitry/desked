import produce, { Draft } from 'immer'
import { SubjectsActions, SubjectsActionTypes } from './actionCreators'
import { LoadingState, SubjectState } from './contracts/state'

const initialSubjectsState: SubjectState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const subjectsReducer = produce((draft: Draft<SubjectState>, action: SubjectsActions) => {

    switch (action.type) {
        case SubjectsActionTypes.SET_SUBJECTS_DATA:
            draft.items = action.payload
            draft.loadingState = LoadingState.LOADED
            break;
        case SubjectsActionTypes.FETCH_SUBJECTS_DATA:
            draft.items = []
            draft.loadingState = LoadingState.LOADING
            break;
        case SubjectsActionTypes.SET_SUBJECTS_LOADING_STATE:
            draft.loadingState = action.payload
            break;
        default:
            break;
    }

}, initialSubjectsState)