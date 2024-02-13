import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <div className="pt-5 grid grid-cols-8 lg:grid-cols-6 gap-3 lg:gap-10 mx-3">
      <aside className="col-span-2 lg:col-span-1 bg-background rounded-xl">

      </aside>
      <main className="col-span-4 lg:col-span-4 p-5 bg-background rounded-xl">
      <PostCard />
      </main>
      <aside className="col-span-2 lg:col-span-1 bg-background rounded-xl">

      </aside>
    </div>
  );
}
