const STATUS = 'CHECK_STATUS';
export const statusCheck = (title) => ({
  type: STATUS,
  payload: title,
});

const initialCategories = [];

const categoriesReducer = (state = initialCategories, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
