import Link from "next/link";
import { MdOutlineTimeline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { SlNote } from "react-icons/sl";
function NavigationBar() {
  return (
    <nav className="px-[70px] py-2">
      <ul className="flex flex-start space-x-1">
        <li>
          <Link
            href="/til/trending"
            className="text-black hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center"
          >
            <MdOutlineTimeline className="mr-2" /> 트렌딩
          </Link>
        </li>
        <li>
          <Link
            href="/til/recent"
            className="text-black hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center"
          >
            <LuRefreshCcw className="mr-2" />
            <span>최신</span>
          </Link>
        </li>
        <li>
          <Link
            href="/til/write"
            className="text-black hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center"
          >
            <SlNote className="mr-2" />
            TIL 쓰러가기
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
