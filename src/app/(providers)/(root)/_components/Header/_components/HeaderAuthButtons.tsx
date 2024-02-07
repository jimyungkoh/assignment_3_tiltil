"use client";

import { useAuth } from "@/app/(providers)/_contexts/auth.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function HeaderAuthButtons() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const handleSignOutButton = () => {
    setIsLoggedIn(false);
    Swal.fire({
      position: "top-end",
      title: "로그아웃에 성공하였습니다.",
      icon: "success",
      toast: true,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: "w-4/12 h-3/12",
        title: "text-lg",
      },
    });
    return router.replace("/");
  };

  return (
    <div className="flex gap-x-4 items-center">
      {isLoggedIn ? (
        <>
          <Link href="/my-page">마이페이지</Link>
          <button onClick={handleSignOutButton}>로그아웃하기</button>
        </>
      ) : (
        <>
          <Link href="/sign-up">회원가입하기</Link>
          <Link href="/log-in">로그인하기</Link>
        </>
      )}
    </div>
  );
}

export default HeaderAuthButtons;
