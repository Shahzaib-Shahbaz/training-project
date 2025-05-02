import { EditedProduct } from "../[locale]/hooks/useEditProduct";
import { Product } from "../[locale]/types/product";

export default class Products {
    static async FetchProducts() {
      try {
        const response = await fetch(
          "https://6802037381c7e9fbcc440bf4.mockapi.io/products"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products...");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  
    static async FetchSingleProduct(id: string) {
      try {
        const response = await fetch(
          `https://6802037381c7e9fbcc440bf4.mockapi.io/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Unable to fetch the product");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  
    static async EditProduct(id: string, data: EditedProduct) {
      try {
        const response = await fetch(
          `https://6802037381c7e9fbcc440bf4.mockapi.io/products/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update product");
        }
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        throw error;
      }
    }

    static async AddProduct(obj: Product){
      try{
        const res = await fetch("https://6802037381c7e9fbcc440bf4.mockapi.io/products",
          {
            method: 'POST',
            headers: {'content-type':'application/json'},
           
            body: JSON.stringify(obj)

          }
        );
        if (!res.ok){
          throw new Error("faoled");
        }
        const data = await res.json();
        return data;
      }catch(err){
        throw err;
      }
    }
  }