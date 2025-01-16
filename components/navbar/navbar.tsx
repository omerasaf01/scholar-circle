import {Button} from "@/components/ui/button";
import {signOutAction} from "@/app/actions";
import * as React from "react";
import {NavbarElements} from "@/components/navbar/navbar-elements";
import Link from "next/link";
import {createClient} from "@/utils/supabase/server";
import {ProfileButton} from "@/components/navbar/profile-button";

export async function Navbar() {
    const supabase = await createClient();
    const user = await supabase.auth.getUser();
    console.log(user);

    return (
        <div className="flex justify-between pt-5 items-center">
            <div>
                <Link href="/" className="text-xl">ScholarCircle</Link>
            </div>
            <NavbarElements />
            {user.error ? (
                <div className="flex gap-2">
                    <Link href="/sign-in" passHref legacyBehavior>
                        <Button variant="outline">Giriş Yap</Button>
                    </Link>
                    <Link href="/sign-up" passHref legacyBehavior>
                        <Button>Kayıt Ol</Button>
                    </Link>
                </div>
            ) : (
                <>
                    <ProfileButton />
                </>
            )}
        </div>
    )
}