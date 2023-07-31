import { Category } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export default getCategories;
