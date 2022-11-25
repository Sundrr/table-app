// export const comparator = (params) => (a, b) => {
//     return params.order === 'desc' ? a[params.field] - b[params.field] : b[params.field] - a[params.field];
// };

export const comparator = (params) => (a, b) => {
    const result = a[params.field] > b[params.field] ? 1 : a[params.field] < b[params.field] ? -1 : 0;
    if (params.order === 'asc') {
        return -result;
    }
    if (params.order === 'desc') {
        return result;
    }
};

export const filtrator = (params) =>
    (item) => String(item[params.field]).toLowerCase().includes(params.search.toLowerCase());

export const filterMap = {
    all: (el) => el,
    odd: (el, idx) => idx % 2 === 0,
    even: (el, idx) => idx % 2 === 1,
};