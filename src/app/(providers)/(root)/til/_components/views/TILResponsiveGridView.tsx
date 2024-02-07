import { TIL } from "@/types/TIL";
import { TILViewProps } from "./types/TILViewProps";

export default function TILResponsiveGridView({ tilList }: TILViewProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tilList.map((til: TIL, index: number) => (
        <div
          key={til.title}
          className="block p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {til.title}
          </h5>
          <p className="font-normal text-gray-700">{til.content}</p>
          <div className="mt-4">
            <div className="text-right text-sm text-gray-500">
              {til.author.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
