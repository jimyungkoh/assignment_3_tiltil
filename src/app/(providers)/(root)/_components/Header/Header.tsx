import Link from "next/link";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";

function Header() {
  return (
    <header className="shadow py-6 px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-black text-xl font-bold tracking-widest">
          <Link href="/">TíĹ:TíĹ</Link>
        </h1>
        <HeaderAuthButtons />
      </div>
    </header>
  );
}

export default Header;
