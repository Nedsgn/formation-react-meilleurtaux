export const stringComparer = (a, b) => a?.localeCompare(b ?? '');
export const dateComparer = (a, b) => Date.parse(a) - Date.parse(b)