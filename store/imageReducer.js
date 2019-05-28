export const GET_IMAGES = "GET_IMAGES";

const initState = {
  images: ["image1", "image2"]
};

const imageReducer = (state = initState, { type, payload }) => {
  if (type === GET_IMAGES) {
    return { ...state };
  }
  if (type === "1") {
    return { ...state, images: ["images1"] };
  }
  return { ...state };
};

export default imageReducer;
