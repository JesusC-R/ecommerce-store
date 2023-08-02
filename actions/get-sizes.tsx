import { Size } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching sizes:", error);
    throw error;
  }
};

export default getSizes;
