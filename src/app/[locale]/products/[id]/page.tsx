"use client";

import { useParams } from "next/navigation";
import Productcard from "@/app/[locale]/components/productcard";
import { useState, useEffect } from "react";
import { Button, Skeleton } from "antd";
import useFetchProduct from "../../hooks/Products/useFetchProducts";
import Products from "@/app/class/product";
import useMutateProducts from "../../hooks/Products/useMutateProducts";
import { Product } from "../../types/product";
export default function SingleProduct() {
  const params = useParams();
  const Paramid = params.id;
  const id = Array.isArray(Paramid) ? Paramid[0] : Paramid;

  const {
    data,
    isLoading,
    error: fetchError,
  } = useFetchProduct({
    querykey: ["products", id as string],
    queryfunction: () => Products.FetchSingleProduct(id as string),
  });

  const [fields, setFields] = useState({
    name: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    if (data) {
      setFields({
        name: data.name || "",
        price: data.price || "",
        description: data.description || "",
      });
    }
  }, [data]);

  const [editable, setEditable] = useState<boolean>(false);

  const {
    mutate,
    error: mutationError,
    isPending,
  } = useMutateProducts({
    mutationfunction: (updatedData: Product) =>
      Products.EditProduct(id as string, updatedData),
    id,
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    if (!data) return;

    mutate({
      ...data,
      name: fields.name || data.name,
      price: fields.price || data.price,
      description: fields.description || data.description,
    });

    setEditable(false);
  };

  if (fetchError || mutationError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {(fetchError || mutationError)?.toString()}
      </div>
    );
  }
  if (isPending || isLoading) {
    <h1>loading</h1>;
  }

  return (
    <div>
      <div className="p-8">
        {isLoading ? (
          <Skeleton active />
        ) : (
          data && (
            <Productcard
              product={data}
              showActions={isLoading || isPending}
              editable={editable}
              setEditable={setEditable}
              func={handleFieldChange}
              fields={fields}
            />
          )
        )}
      </div>

      {editable && (
        <div className="flex flex-col items-center gap-4 p-4">
          <Button type="primary" loading={isPending} onClick={handleUpdate}>
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}
