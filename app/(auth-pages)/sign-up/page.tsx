import {signInWithGoogle, signUpAction} from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import {FaGoogle} from "react-icons/fa6";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex flex-col mx-auto">
        <h1 className="text-2xl font-medium">Kayıt Ol</h1>
        <p className="text-sm text text-foreground">
          Zaten bir hesabın var mı?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Giriş Yap
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="Sen@example.com" required/>
          <Label htmlFor="password">Şifre</Label>
          <Input
              type="password"
              name="password"
              placeholder="Şifre"
              minLength={6}
              required
          />
          <SubmitButton formAction={signUpAction} pendingText="Signing up...">
            Kayıt Ol
          </SubmitButton>
          <div className="grid grid-cols-3 items-center gap-1 my-3">
            <Separator className="dark:bg-white"/>
            <span className="text-center">Hızlı Giriş Yap</span>
            <Separator className="dark:bg-white"/>
          </div>
          <Button type="button" className="flex gap-2" onClick={signInWithGoogle}>
            <FaGoogle/> Google
          </Button>
          <FormMessage message={searchParams}/>
        </div>
      </form>
    </>
  );
}
