export const SetProductList = (list) => {
  return {
    type: "SetProductList",
    payload: list
  };
};

export const AddToCart = (item) => {
    return {
        type: "AddToCart",
        payload: item
    }
};

export const PlusItem = (item) => {
    return {
        type:"PlusItem",
        payload: item
    }
};

export const MinusItem = (item) => {
    return {
        type:"MinusItem",
        payload: item
    }
};

export const DeleteItem = (item) => {
    return {
        type:"DeleteItem",
        payload: item
    }
};

export const Checkout = () => {
    return {
        type:"Checkout"
    }
};

export const UpdateCart = (item) => {
    return {
        type: "UpdateCart",
        payload: item
    }
}