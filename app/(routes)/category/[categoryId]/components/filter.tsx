"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utlis";
import { Black_And_White_Picture } from "next/font/google";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve the value of a specific parameter from the query string of the current URL
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // Parse the current query string into an object representation
    const currentQuery = qs.parse(searchParams.toString());

    // Create a new object with the current query parameters and the new parameter specified by 'valueKey'
    const query = {
      ...currentQuery,
      [valueKey]: id,
    };

    // If the parameter 'valueKey' already has the same value as 'id', set 'valueKey' to null to remove it from the query
    if (currentQuery[valueKey] === id) {
      query[valueKey] = null;
    }

    // Convert the 'query' object back into a query string and construct a new URL
    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
