import PostAddingSection from "@/components/sections/post-adding-section";

export default async function Page() {
    return (
        <div className="grid-cols-3 grid mt-12">
            <PostAddingSection />
        </div>
    );
}