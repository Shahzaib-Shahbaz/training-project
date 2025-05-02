import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product } from "../../types/product";

interface Props {
  mutationfunction: (data: Product) => Promise<any>;
  id?: string;
}

export default function useMutateProducts({ mutationfunction, id }: Props) {
  const queryClient = useQueryClient();
  const { mutate, error, isPending } = useMutation({
    mutationFn: mutationfunction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      if (id) {
        queryClient.invalidateQueries({ queryKey: ["products", id] });
      }
    },
  });

  return { mutate, error, isPending };
}
