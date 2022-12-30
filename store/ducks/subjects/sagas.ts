import { takeEvery, call, put } from "@redux-saga/core/effects";
import { setSubjectsData, setSubjectsLoadingState, SubjectsActionTypes } from "./actionCreators";
import { api } from "../../../sevices/api";
import { LoadingState } from "./contracts/state";

export function* fetchSubjectsRequest() {

    try {
        const data = yield call(api.fetchSubjects)
        yield put(setSubjectsData(data))
    } catch (error) {
        yield put(setSubjectsLoadingState(LoadingState.ERROR))
    }
    
}

export function* subjectsSaga() {
    yield takeEvery(SubjectsActionTypes.FETCH_SUBJECTS_DATA, fetchSubjectsRequest)
}