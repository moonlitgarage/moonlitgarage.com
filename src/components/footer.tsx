import { Flower, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="header" className="mb-0">
            <footer className="sticky flex h-16 items-center gap-4 border-t bg-background px-4 md:px-6">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Flower className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                </nav>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial">
                        <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
                            <Link to="https://github.com/akxcix" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                                <Github className="h-6 w-6" />
                                <span className="sr-only">github/akxcix</span>
                            </Link>
                            <Link to="https://twitter.com/ak_xcix" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                                <Twitter className="h-6 w-6" />
                                <span className="sr-only">twitter/ak_xcix</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}