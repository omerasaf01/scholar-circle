"use server";

import PostCard from "@/components/post/post-card";
import UserCard from "@/components/user-card";
import {PostPagination} from "@/components/pagination";
import {getPosts} from "@/server-actions/post-actions";
import {createClient} from "@/utils/supabase/server";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

export default async function Home() {
    let supabase = await createClient();
    let posts = await getPosts();

    return (
        <div className="grid grid-cols-12 mt-12">
            <div className="col-span-6 col-start-2 space-y-3">
                <div className="flex justify-end">
                    <Link passHref legacyBehavior href={"/posts/add"}>
                        <Button>
                            <Plus /> Oluştur
                        </Button>
                    </Link>
                </div>
                {posts.length <= 0 && <span className="w-full flex justify-center">Postlar yüklenirken bir sorunla karşılaşıldı</span>}
                {posts.map((value, index, array) => <PostCard  title={value.title} content={value.content} key={index}/>)}
                <PostPagination />
            </div>
            <div className="col-span-3 col-start-9 space-y-4">
                <UserCard />
            </div>
        </div>
    );
}
