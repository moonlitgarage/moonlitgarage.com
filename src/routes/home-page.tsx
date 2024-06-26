import { LINK_AERONODE, LINK_TWITTER } from "@/common/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { H1, H3, List } from "@/components/ui/typography";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <div className="text-center">
                <H1 className="p-6">Koero Labs</H1>
                <div className="py-12">
                    <H3>
                        we make aerial autonomy easy.
                    </H3>                    
                </div>
            </div>
            <div className="flex flex-col text-center py-6 border-dashed border-t">
                <H3>
                    current projects
                </H3>
            </div>
            <div className="flex flex-row p-6 space-x-4">
                <Card className="w-1/2 flex flex-col">
                    <CardHeader>
                        <CardTitle>
                            AeroNode
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grow">
                        <List>
                            <li>
                            Making drone programming dead simple.
                            </li>
                            <li>
                            Get the board, plug it into your drone, and get an easy to use api exposed over your drone.
                            </li>
                        </List>
                    </CardContent>
                    <CardFooter>
                        <Link to={LINK_AERONODE}>
                            <Button variant={"default"}>
                                Check it out!
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
                <Card className="w-1/2 flex flex-col">
                    <CardHeader>
                        <CardTitle>
                            Ansel
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <List>
                            <li>
                            An autonomous photography and film making drone.
                            </li>
                            <li>
                            Currently in planning, dev starts in august 2024.
                            </li>
                            <li>
                            Follow on twitter for updates.
                            </li>
                        </List>
                    </CardContent>
                    <div className="grow"></div>
                    <CardFooter className="flex flex-row">
                        <Link to={LINK_TWITTER} className="grow">
                            <Button variant={"outline"}>
                                Twitter
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}