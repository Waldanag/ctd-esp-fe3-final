
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITES':
            return { ...state, favs: [...state.favs, action.payload] };
        case 'DEL_FAV_BY_ID':
            return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)};
        case 'CLEAR_ALL_FAVS':
            return { ...state, favs: [] };
        case 'CHANGE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case 'GET_LIST':
            return { ...state, data: action.payload };
        case 'GET_DETAIL':
            return { ...state, dentistSelected: action.payload };
        default:
            return state;
        }
    };