const mailingReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MAILING_ADDRESS':
      return action.payload;
    case 'UNSET_MAILING_ADDRESS':
      return [];
    default:
      return state;
  }
};

export default mailingReducer;