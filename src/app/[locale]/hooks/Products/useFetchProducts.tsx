"use client";

import { useQuery } from "@tanstack/react-query";
import { Product } from "../../types/product";

type Props = {
  querykey: Array<string | number>;
  queryfunction: () => Promise<Product[]>;
};

export default function useFetchProduct({ querykey, queryfunction }: Props) {
  const { data, error, isLoading } = useQuery<Product[]>({
    queryKey: querykey,
    queryFn: queryfunction,
  });

  return { error, data, isLoading };
}
