"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { useRouter } from "next/navigation";
import { FormEventHandler, useRef } from "react";
import Swal from "sweetalert2";

function SignUpForm() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const id = idRef.current?.value;
    const pw = pwRef.current?.value;

    Swal.fire({
      position: "top-end",
      title: "회원가입에 성공하였습니다.",
      icon: "success",
      toast: true,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "w-4/12 h-3/12",
        title: "text-lg",
      },
    });

    setIsLoggedIn(true);

    router.replace("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg"
    >
      <div className="mb-6">
        <label
          htmlFor="id"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          아이디
        </label>
        <input
          type="text"
          name="id"
          id="id"
          ref={idRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="pw"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          비밀번호
        </label>
        <input
          type="password"
          name="pw"
          id="pw"
          ref={pwRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <button
        type="submit"
        className="border-none text-black hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium rounded-lg text-base w-full px-5 py-2.5 text-center transition-colors duration-200 ease-in-out"
      >
        회원가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
