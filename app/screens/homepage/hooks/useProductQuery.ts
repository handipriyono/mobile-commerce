import { getListProduct } from "../api/index";
import { useQuery } from "@tanstack/react-query";

const queryKey = "list-productss";
const useProductQuery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey],
    queryFn: () => getListProduct(),
    staleTime: 60000,
  });

  return {
    dataProduct: data,
  };
};

export default useProductQuery;
