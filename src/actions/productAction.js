//Actions


export const loadProducts = (data) => ({
    type: "LOAD_PRODUCTS",
    payload: data
})

export const getProduct = (product) => ({
    type: "GET_PRODUCT",
    payload: product
})

export const productInCart = (product) => ({
  type: "ADD_CART",
  payload: product
});


