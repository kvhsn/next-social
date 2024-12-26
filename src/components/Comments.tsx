import Image from "next/image";

export default function Comments() {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/29842976/pexels-photo-29842976/free-photo-of-black-and-white-urban-scene-at-santa-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        ></Image>
        <div className="flex-1 flex items-center bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image src="/emoji.png" alt="" width={16} height={16}></Image>
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://images.pexels.com/photos/29842976/pexels-photo-29842976/free-photo-of-black-and-white-urban-scene-at-santa-station.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          ></Image>
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium ">Mayme Robertson</span>
            <p>
              interior felt reader ask group won closer due saw previous soil
              finally function tobacco automobile happened outside orange former
              merely equipment gift shut successful
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer h-4 w-4"
                ></Image>
                <span className="text-gray-100">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer h-4 w-4 rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
}
