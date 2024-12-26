import Image from "next/image";

export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsered Ads</span>
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer h-4 w-4 rounded-full"
        ></Image>
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/29315817/pexels-photo-29315817/free-photo-of-black-necked-swan-gliding-in-serene-lake-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/29315817/pexels-photo-29315817/free-photo-of-black-necked-swan-gliding-in-serene-lake-waters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          ></Image>
          <span className="text-blue-500 font-medium">Grass</span>
        </div>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "chart various whether husband exactly aside throw help clothing"
            : size === "md"
            ? "chart various whether husband exactly aside throw help clothing stock close off long steam"
            : "chart various whether husband exactly aside throw help clothing stock close off long steam queen bad sky else worry terrible particular fact grass slightly"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
}
