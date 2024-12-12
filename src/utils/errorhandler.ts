import { Commit } from "vuex";

export function handleApiError(commit:Commit, error: unknown,commitName="setError"): void {
    const message =
        error instanceof Error
        ? error.message
        : 'An unexpected error occurred';
        commit(commitName, message);
}