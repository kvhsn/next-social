import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function AddPost() {
  const { userId } = await auth();

  const testAction = async (formData: FormData) => {
    "use server";
    if (!userId) return;
    const desc = formData.get("desc") as string;
    try {
      const res = await prisma.post.create({
        data: {
          userId: userId,
          desc,
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="https://images.pexels.com/photos/5723941/pexels-photo-5723941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      ></Image>
      <div className="p-2 flex-1">
        <form action={testAction} className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button type="submit">Send</button>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addvideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
}
