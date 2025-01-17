"use client";

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Button } from "../ui/button";
import {createPost} from "@/server-actions/post-actions";
import {toast} from "sonner";

const formSchema = z.object({
    title: z.string({ required_error: "Lütfen bir başlık giriniz" }).max(100),
    content: z.string({ required_error: "Lütfen bir içerik giriniz" }).max(5000),
});

export default function PostAddingSection() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const submit = async (values: z.infer<typeof formSchema>) => {
        let result = await createPost(values);

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
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Başlık *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Bir başlık belirtiniz" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>İçerik *</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Gönderinizde yaşadığınız sorunu veya herhangi bir konuyu anlatabilirsiniz" {...field} value={field.value || ""} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full" type="submit">Gönder</Button>
                </form>
            </Form>
        </div>
    );
}