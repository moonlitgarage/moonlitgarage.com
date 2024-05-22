import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const headerLinks = [
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
];

export default function Navbar() {
    return (
        <div id="header">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link to="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                        <Send className="h-6 w-6" />
                        <span className="sr-only">Koero Labss</span>
                    </Link>
                    {headerLinks.map((link, index) => (
                        <Link key={index} to={link.link}>{link.name}</Link>
                    ))}                </nav>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial">

                    </div>
                    {/* <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form> */}
                    <ModeToggle />
                </div>
            </header>
        </div>
    );
}