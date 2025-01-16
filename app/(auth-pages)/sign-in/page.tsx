import {signInAction, signInWithGoogle} from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {FaGoogle} from "react-icons/fa6";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Giriş Yap</h1>
      <p className="text-sm text-foreground">
        Henüz bir hesabın yok mu?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Kayıt Ol
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="you@example.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Şifre</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Şifremi Unuttum
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <SubmitButton pendingText="Signing In..." formAction={signInAction}>
          Giriş Yap
        </SubmitButton>
        <div className="grid grid-cols-3 items-center gap-1 my-3">
          <Separator className="dark:bg-white" />
          <span className="text-center">Hızlı Giriş Yap</span>
          <Separator className="dark:bg-white" />
        </div>
        <Button type="button" className="flex gap-2" onClick={signInWithGoogle}>
          <FaGoogle /> Google
        </Button>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
