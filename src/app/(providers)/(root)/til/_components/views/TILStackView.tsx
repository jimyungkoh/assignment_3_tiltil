import React from "react";
import { TIL } from "@/types/TIL";
import { TILViewProps } from "./types/TILViewProps";

export default function TILStackView({ tilList }: TILViewProps) {
  return (
    <div className="flex justify-center flex-col items-center">
      {tilList.map((til: TIL, index: number) => (
        <div
          key={til.title}
          className="w-1/2 border border-gray-200 rounded-lg p-4 mb-4 shadow-sm hover:border-blue-600 hover:shadow-md transition-shadow duration-300"
        >
          <h2 className="text-lg font-bold">{til.title}</h2>
          <p className="text-gray-700">{til.content}</p>
          <p className="text-right text-sm text-gray-500 mt-2">
            작성자: {til.author.name}
          </p>
        </div>
      ))}
    </div>
  );
}
