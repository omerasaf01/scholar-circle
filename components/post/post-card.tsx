import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Dot, MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {FaComment} from "react-icons/fa";
import {IoChatbubbleOutline} from "react-icons/io5";
import {Post} from "@/server-actions/post-actions";

export default function PostCard(values: {title: string, content: string | null}) {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center gap-3">
                    <div>
                        <Avatar>
                            <AvatarFallback>
                                ÖA
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="block">
                        <div className="text-lg">Ömer Asaf Karasu</div>
                        <div className="flex">3 Saat Önce <Dot /> SAT MATH </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-lg font-bold">{values.title}</div>
                <div className="mt-2">
                    {values.content}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div>
                    <Button variant="outline" className="gap-2"><IoChatbubbleOutline className="w-4 h-4" /> 3</Button>
                </div>
                <div>

                </div>
            </CardFooter>
        </Card>
    )
}