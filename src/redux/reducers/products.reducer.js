const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_ALBUMS':
            return action.payload;
        case 'UNSET_NEW_ALBUMS':
            return [];
        default:
            return state;
    }
};

export default productsReducer;