import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

export default getCategory;
