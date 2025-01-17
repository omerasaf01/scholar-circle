import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {createClient} from "@/utils/supabase/server";

export default async function UserCard() {
    const supabase = await createClient();
    const {data} = await supabase.auth.getUser();

    return (
        <Card className="flex items-center px-5 py-6 gap-3">
            <div>
                <Avatar className="w-14 h-14">
                    <AvatarFallback>
                        ÖA
                    </AvatarFallback>
                </Avatar>
            </div>
            <div className="block">
                <div className="text-lg">{data.user?.user_metadata.name}</div>
                <div className="flex gap-1"><span className="font-bold">193</span> Puan</div>
            </div>
        </Card>
    );
}