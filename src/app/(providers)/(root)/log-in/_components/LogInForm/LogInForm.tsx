"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import { FormEventHandler, useRef } from "react";
import Swal from "sweetalert2";

function LogInForm() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const auth = useAuth();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const id = idRef.current?.value;
    const pw = pwRef.current?.value;

    if (!id || !pw) {
      Swal.fire({
        icon: "error",
        title: "오류",
        text: "아이디와 비밀번호를 입력해주세요.",
        confirmButtonColor: "#2563EB",
      });
      return;
    }

    const url = `${window.location.origin}/api/auth/log-in`;
    const options = { method: "POST", body: JSON.stringify({ id, pw }) };
    const response = await fetch(url, options);
    const data = await response.json();

    if (data === "OK" && response.status === 200) {
      auth.setIsLoggedIn(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
        text: "아이디 또는 비밀번호가 잘못되었습니다.",
        confirmButtonColor: "#2563EB",
      });
    }
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
        로그인하기
      </button>
    </form>
  );
}

export default LogInForm;
