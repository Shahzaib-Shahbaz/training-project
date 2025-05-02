"use client";
import { Button, Skeleton, Table } from "antd";
import Productcard from "../components/productcard";
import useFetchProduct from "../hooks/Products/useFetchProducts";
import { Product } from "../types/product";
import Products from "@/app/class/product";
import { useState, useEffect } from "react";
import ModalForm from "../components/modalform";

export default function ProductsS() {
  const [toggle, setToggle] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("toggle");
      return stored ? JSON.parse(stored) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  const { data, isLoading, error } = useFetchProduct({
    querykey: ["products"],
    queryfunction: Products.FetchProducts,
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];

  if (error) {
    return (
      <h1 className="flex justify-center items-center h-screen text-red-500">
        Error loading products
      </h1>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>

      <div className="flex justify-between">
        <Button
          onClick={() => {
            setToggle(!toggle);
            console.log(data);
          }}
        >
          {toggle ? "Switch to cards" : "Switch to table"}
        </Button>
        <ModalForm product={data} buttonText="Add Product" />
      </div>

      {toggle ? (
        <Table columns={columns} dataSource={data} loading={isLoading} />
      ) : (
        <Skeleton loading={isLoading} paragraph>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.map((product: Product) => (
              <div key={product.id}>
                <Productcard
                  key={product.id}
                  product={product}
                  showActions={isLoading}
                  editable={false}
                  setEditable={() => false}
                  func={() => console.log(`Product ${product.id} clicked`)}
                />
              </div>
            ))}
          </div>
        </Skeleton>
      )}
    </div>
  );
}
