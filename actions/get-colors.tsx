import { Color } from "@/types";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching colors:", error);
    throw error;
  }
};

export default getColors;
