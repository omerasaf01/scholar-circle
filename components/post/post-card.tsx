import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Dot, MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/button";
import {FaComment} from "react-icons/fa";
import {IoChatbubbleOutline} from "react-icons/io5";

export default function PostCard() {
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
                <div className="text-lg font-bold">SAT Math Sorusu</div>
                <div className="mt-2">
                    <p>
                        SAT Math sorusu çözümü için yardım arıyorum. Soru şu şekilde:
                    </p>
                    <p>
                        Bir daire içerisine çizilen bir üçgenin kenarları 3, 4 ve 5 birimdir. Bu üçgenin çevresi kaç birimdir?
                    </p>
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