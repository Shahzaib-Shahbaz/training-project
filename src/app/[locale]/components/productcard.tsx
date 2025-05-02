import { Card, Input } from "antd";
import { Product } from "../types/product";
import { usePathname } from "next/navigation";
import { EditOutlined } from "@ant-design/icons";
import ModalForm from "./modalform";

type Props = {
  product: Product;
  showActions: boolean;
  editable: boolean;
  setEditable: (editable: boolean) => void;
  func: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fields?: {
    name: string;
    price: string;
    description: string;
  };
};

export default function Productcard({
  product,
  showActions,
  editable,
  setEditable,
  func,
  fields,
}: Props) {
  const path = usePathname();

  if (!product) {
    return (
      <Card
        size="small"
        loading={showActions}
        className="shadow-md rounded-md border"
      >
        <p>Loading...</p>
      </Card>
    );
  }

  return (
    <>
      <Card
        size="small"
        loading={showActions}
        hoverable={true}
        type="inner"
        title={
          showActions ? (
            "Loading..."
          ) : !editable ? (
            `${product.name}`
          ) : (
            <Input
              style={{ width: "180px" }}
              size="small"
              placeholder="name"
              name="name"
              onChange={func}
              value={fields?.name}
            />
          )
        }
        extra={
          path === "/en/products" || path === "/id/products" ? (
            <div className="flex text-center space-x-2">
              <span>
                <ModalForm buttonText={"Edit"} product={product} />
              </span>
              <button>
                <a href={`/en/products/${product.id}`}> view</a>
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setEditable(!editable);
              }}
              className="text-red-600 p-2"
            >
              {editable ? `cancel` : <EditOutlined />}
            </button>
          )
        }
        className="shadow-md rounded-md border"
      >
        {editable ? (
          <div className="flex flex-col">
            <Input
              style={{ margin: "0px 0px 3px 0px" }}
              placeholder="product price"
              name="price"
              onChange={func}
              value={fields?.price}
            />
            <Input
              placeholder="product description"
              name="description"
              onChange={func}
              value={fields?.description}
            />
          </div>
        ) : (
          <>
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-sm text-gray-600 truncate">
              {product.description}
            </p>
          </>
        )}
      </Card>
    </>
  );
}
