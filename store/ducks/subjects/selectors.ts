import { RootState } from "../../store";
import { LoadingState, SubjectState } from "./contracts/state";

export const selectSubjectsData = (state: RootState) => state.subjects.items

export const selectLoadingState = (state: RootState): LoadingState => state.subjects.loadingState
export const selectIsSubjectsLoading = (state: RootState): boolean => state.subjects.loadingState === LoadingState.LOADING