export const CHANGE_NAME = 'CHANGE_NAME';

export function onChangeName(val) {
    return {
        type: CHANGE_NAME,
        data: val
    };
}