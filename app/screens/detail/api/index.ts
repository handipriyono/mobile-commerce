import Axios from "../../../commons/helpers/axios";

type TParams = {
  id: string | number;
};

export const getDetailProduct = async ({ id }: TParams) => {
  try {
    const response = await Axios.get(`/products/${id}`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
