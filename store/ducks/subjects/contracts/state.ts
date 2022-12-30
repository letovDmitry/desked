export interface SubjectState {
    items?: string[];
    loadingState: LoadingState
}

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}