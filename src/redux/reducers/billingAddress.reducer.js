const billingReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_BILLING_ADDRESS':
            return action.payload;
        case 'UNSET_BILLING_ADDRESS':
            return [];
        default:
            return state;
    }
};

export default billingReducer;