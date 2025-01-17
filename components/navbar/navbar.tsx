import {Button} from "@/components/ui/button";
import {signOutAction} from "@/app/actions";
import * as React from "react";
import {NavbarElements} from "@/components/navbar/navbar-elements";
import Link from "next/link";
import {createClient} from "@/utils/supabase/server";
import {ProfileButton} from "@/components/navbar/profile-button";

export async function Navbar() {
    const supabase = await createClient();
    const {data, error} = await supabase.auth.getUser();

    return (
        <div className="flex justify-between pt-5 pb-2 items-center">
            <div>
                <Link href="/" className="text-xl">ScholarCircle</Link>
            </div>
            <NavbarElements />
            {error ? (
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
                    <ProfileButton name={data.user?.user_metadata.name} />
                </>
            )}
        </div>
    )
}