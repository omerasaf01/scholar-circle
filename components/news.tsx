import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

export default function NewsCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Son Haberler</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col *:text-start">
                <div  className="flex flex-col border border-gray-300 rounded-md p-3 space-y-2 justify-start">
                    <div className="text-lg">
                        ÖSYM Sınav Sistemi Değişti
                    </div>
                    <div>
                        Okumak için tıkla!
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}