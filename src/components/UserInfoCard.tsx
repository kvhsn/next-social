import Image from "next/image";
import Link from "next/link";

export default function UserInfoCard({ userId }: { userId?: string }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Dora Jennings</span>
          <span className="text-sm">@dorajennings</span>
        </div>
        <p>
          effect finger pretty primitive worker chemical play climate border
          catch balloon burst gone certainly avoid hidden steam start
          occasionally boy broken from low people
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Edgar High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <Image src="/link.png" alt="" width={16} height={16} />
          <Link href="/" className="text-blue-500 font-medium">
            www.dorajennings.com
          </Link>
        </div>
        <div className="flex gap-1 items-center">
          <Image src="/date.png" alt="" width={16} height={16} />
          <span className="">Joined November 2024</span>
        </div>
      </div>
      <button className="bg-blue-500 text-white text-sm rounded-md p-2">
        Follow
      </button>
      <span className="text-red-400 self-end text-xs cursor-pointer">
        Block User
      </span>
    </div>
  );
}
