import Post from "./Post";

export default function Feed() {
  return (
    <div className="flex p-4 shadow-md bg-white rounded-lg flex-col gap-12">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
