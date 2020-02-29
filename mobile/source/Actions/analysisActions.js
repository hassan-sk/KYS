import t from './types';

export const analysis_loading = (x) => {
    return ({
        type: t.ANALYSIS_LOADING,
        payload: x
    })
}

