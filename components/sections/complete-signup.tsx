"use client";

import { FormState, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { createUser } from "@/server-actions/user-actions";
import {toast} from "sonner";

const formSchema = z.object({
  name: z.string({ required_error: "İsim boş olamaz" }),
});

export default function CompleteSignup({ status }: { status: boolean }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const submit = async (values: z.infer<typeof formSchema>) => {
    let result = await createUser({
      name: values.name,
      email: "",
    });

    if (!result)
      toast.success("Kaydınız başarıyla tamamlandı");

    else
        toast.error("Kaydınız tamamlanırken bir sorunla karşılaşıldı");
  }

  return (
    <Dialog open={status}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Kaydınızı Birkaç İşlem İle Tamamlayın</DialogTitle>
          <DialogDescription>
            Lütfen aşağıdaki bilgileri doldurarak kaydınızı tamamlayın.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lütfen Adınızı Giriniz *</FormLabel>
                  <FormControl>
                    <Input placeholder="Bir başlık belirtiniz" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Kaydı Tamamla</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

