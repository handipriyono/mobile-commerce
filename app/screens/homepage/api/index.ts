import Axios from "../../../commons/helpers/axios";

export const getListProduct = async () => {
  try {
    const response = await Axios.get("/products");
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
