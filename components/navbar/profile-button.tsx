"use client";

import {
    LogOut,
    Settings,
    User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ThemeSwitcher} from "@/components/theme-switcher";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {signOutAction} from "@/app/actions";

export function ProfileButton({name}: {name: string}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="py-7 gap-3">
                    <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {name}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuGroup className="*:gap-2">
                    <DropdownMenuItem>
                        <User />
                        <span>Profil</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <ThemeSwitcher />
                <DropdownMenuItem className="gap-2" onClick={signOutAction}>
                    <LogOut /> Çıkış Yap
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
