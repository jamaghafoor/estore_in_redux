//Reducers

const initialState = {
  products: [],
  product: {},
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "ADD_CART":
      return { ...state, cart: [action.payload, ...state.cart]};
    default:
      return state;
  }
};

export default productReducer;
