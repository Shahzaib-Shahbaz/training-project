import { CloseOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { useState, useEffect } from "react";
import useMutateProducts from "../hooks/Products/useMutateProducts";
import Products from "@/app/class/product";
import { Product } from "../types/product";

type Props = {
  buttonText: string;
  product?: Product;
};

export default function ModalForm({ buttonText, product }: Props) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const isEditMode = Boolean(product?.id);

  const [formData, setFormData] = useState<Product>({
    id: "",
    name: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const { mutate, error: mutationError } = useMutateProducts({
    mutationfunction: isEditMode
      ? (data: Product) => Products.EditProduct(product!.id!, data)
      : Products.AddProduct,
    id: isEditMode ? product!.id! : "",
  });

  const handleOk = () => {
    setConfirmLoading(true);

    mutate(formData, {
      onSuccess: () => {
        setConfirmLoading(false);
        setOpen(false);
        if (!isEditMode) {
          setFormData({ id: "", name: "", price: "", description: "" });
        }
      },
      onError: () => {
        setConfirmLoading(false);
      },
    });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>{buttonText}</Button>
      <Modal
        title={`${isEditMode ? "Edit Product" : "Add Product"}`}
        centered
        open={open}
        closeIcon={<CloseOutlined />}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
      >
        <Input
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          style={{ marginBottom: 10 }}
        />
        <Input
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        {mutationError && (
          <p style={{ color: "red", marginTop: 10 }}>{mutationError.message}</p>
        )}
      </Modal>
    </>
  );
}
