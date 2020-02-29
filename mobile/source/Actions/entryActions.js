import t from './types';

export const entry_loading = (x) => {
    return ({
        type: t.ENTRY_LOADING,
        payload: x
    })
}

export const entry_setFBAccessToken = (x) => {
    return ({
        type: t.ENTRY_SETFBACCESSTOKEN,
        payload: x
    })
}

export const entry_logged = (x) => {
    return ({
        type: t.ENTRY_LOGGED,
        payload: x
    })
}
