"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "../ui/button";
import {createPost} from "@/server-actions/post-actions";
import {toast} from "sonner";
import {useRef} from "react";

const formSchema = z.object({
    title: z.string({required_error: "Lütfen bir başlık giriniz"}).min(1, { message: "Başlık en az 1 karakter olmalı"}).max(100),
    content: z.string({required_error: "Lütfen bir içerik giriniz"}).min(1, { message: "İçerik en az 1 karakter olmalı"}).max(5000),
});

export default function PostAddingSection() {
    const imageInput = useRef<HTMLInputElement>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const submit = async (values: z.infer<typeof formSchema>) => {
        let result = false;
        form.reset({
            title: "",
            content: "",
        });
        if (imageInput.current) imageInput.current.value = "";

        // TODO: Burayı düzenle
        if (imageInput.current && imageInput.current.files)
            result = await createPost(values, imageInput.current.files.item(0));

        if (result)
            toast.success("Gönderiniz başarıyla oluşturuldu");

        else
            toast.error("Gönderiniz oluşturulurken bir sorunla karşılaşıldı");
    }

    return (
        <div className="col-start-2 row-start-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Başlık *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Bir başlık belirtiniz" {...field} value={field.value || ""}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>İçerik *</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Gönderinizde yaşadığınız sorunu veya herhangi bir konuyu anlatabilirsiniz" {...field}
                                        value={field.value || ""}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div>
                        <FormItem>
                            <FormLabel>Görsel</FormLabel>
                            <FormControl>
                                <Input type="file" accept=".jpg, .png, .jpeg" ref={imageInput}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    </div>
                    <Button className="w-full" type="submit">Gönder</Button>
                </form>
            </Form>
        </div>
    );
}
