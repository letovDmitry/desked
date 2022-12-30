import { all } from "@redux-saga/core/effects";
import { subjectsSaga } from "./ducks/subjects/sagas";

export default function* rootSaga() {
    yield all([
        subjectsSaga()
    ])
}