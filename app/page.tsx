import PostCard from "@/components/post/post-card";

export default async function Home() {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-2 mt-12 space-y-3">
            {[1, 2, 3, 4, 5].map((value, index, array) => <PostCard key={index} />)}
        </div>
    </div>
  );
}
