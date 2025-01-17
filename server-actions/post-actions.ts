"use server";

import {PrismaClient} from "@prisma/client";
import {createClient} from "@/utils/supabase/server";

export type Post = {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    authorId: string | null;
}

let prisma = new PrismaClient();

export const createPost = async ({title, content}: { title: string, content: string }) => {
    let supabase = await createClient();
    let {data, error} = await supabase.auth.getUser();

    if (error)
        return false;

    if (!error && data.user?.id != null)
        await prisma.post.create({
            data: {
                content: content,
                title: title,
            }
        });

    return true;


}

export const getPosts = async (): Promise<Post[]> => {
    return prisma.post.findMany();
}