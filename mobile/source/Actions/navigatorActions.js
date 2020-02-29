import t from './types';

export const navigator_select = (x) => {
    return ({
        type: t.NAVIGATOR_SELECT,
        payload: x
    })
}
