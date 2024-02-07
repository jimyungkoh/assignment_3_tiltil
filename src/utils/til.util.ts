import { Sort } from "@/types/Sort";
import { TIL } from "@/types/TIL";

export default async function fetchTIL(sort: Sort): Promise<TIL[]> {
  const url =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);

  const tilList: TIL[] = await response.json();

  return sort === "desc" ? tilList.reverse() : tilList;
}
