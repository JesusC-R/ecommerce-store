import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching billboard:", error);
    throw error;
  }
};

export default getBillboard;
