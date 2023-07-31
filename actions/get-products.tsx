import qs from "query-string";
import { Product } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: BASE_URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  try {
    const res = await fetch(url, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    return res.json() as Promise<Product[]>;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getProducts;
