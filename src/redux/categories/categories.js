const STATUS = 'CHECK_STATUS';
export const statusCheck = title => {
  return {
    type: STATUS,
    payload: title
  }
}

let initialCategories = [];

const categoriesReducer = (state = initialCategories, action) => {
  switch(action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;  
  }
}

export default categoriesReducer;
