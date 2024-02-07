"use client";

import { FormEventHandler, useRef, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function TILForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const router = useRouter();

  const handleInputChange = () => {
    const title = titleRef.current?.value;
    const content = contentRef.current?.value;
    setIsButtonEnabled(!!title && !!content);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const title = titleRef.current?.value;
    const content = contentRef.current?.value;

    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const url = `${window.location.origin}/api/til`;
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
    };
    const response = await fetch(url, options);
    const data = await response.json();

    Swal.fire({
      title: "성공!",
      text: "게시글이 작성되었습니다.",
      icon: "success",
      confirmButtonText: "확인",
      confirmButtonColor: "#2563EB",
    }).then((result) => {
      if (result.isConfirmed) router.push("/");
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl h-fit mx-auto p-8  rounded-lg shadow-md mt-20"
    >
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          제목
        </label>
        <input
          id="title"
          ref={titleRef}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="제목을 입력하세요"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block mb-2 text-base font-medium text-gray-700"
        >
          내용
        </label>
        <textarea
          id="content"
          ref={contentRef}
          onChange={handleInputChange}
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md h-60 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
          placeholder="내용을 입력하세요"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!isButtonEnabled}
          className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
            isButtonEnabled
              ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
              : "bg-gray-500"
          }`}
        >
          작성하기
        </button>
      </div>
    </form>
  );
}

export default TILForm;
