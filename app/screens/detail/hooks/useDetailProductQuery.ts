import { getDetailProduct } from "../api/index";
import { useQuery } from "@tanstack/react-query";

const queryKey = "list-products";

type THooks = {
  id: string | number;
};

const useProductDetailQuery = ({ id }: THooks) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => getDetailProduct({ id: id }),
    staleTime: 60000,
    enabled: !!id,
  });

  return {
    detailProduct: data,
  };
};

export default useProductDetailQuery;
