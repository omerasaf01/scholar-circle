"use server";

import {v4 as uuidv4} from "uuid";
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

export const createPost = async ({title, content}: { title: string, content: string }, file: File | null) => {
    let supabase = await createClient();
    let {data, error} = await supabase.auth.getUser();
    let fileId = null;

    if (file != null)
        fileId = await uploadFile(file);

    if (error)
        return false;

    if (!error && data.user?.id != null)
        await prisma.post.create({
            data: {
                imageId: fileId,
                content: content,
                title: title,
                authorId: data.user.id
            }
        });

    return true;
}

const uploadFile = async (file: File) => {
    let supabase = await createClient();
    let fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
    let fileId = uuidv4();

    await supabase.storage.from("question-images").upload(`/${fileId}.${fileExtension}`, file);

    return fileId;
}

export const getPosts = async () => {
    return prisma.post.findMany({
        take: 5,
        orderBy: {id: "desc"},
        include: { author: true }
    });
}
