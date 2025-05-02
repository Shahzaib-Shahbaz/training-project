import Auth from "@/app/class/auth";
import { useMutation } from "@tanstack/react-query";

type Props = {
  mutationFn: (values: any) => Promise<Auth>;
};

export default function useMutateUsers({ mutationFn }: Props) {
  const { mutate, error, isPending } = useMutation({
    mutationFn,
  });

  return { mutate, error, isPending };
}
