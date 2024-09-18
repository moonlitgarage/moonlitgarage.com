import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Root() {
    return (
        <div id="root">
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className="flex-1 flex flex-col">
                    <div className="flex h-full flex-col md:flex-row">
                        <div className="w-0 md:w-1/5">
                        </div>
                        <div className="w-full md:w-3/5 border-dashed border-l border-r">
                            <div className="p-6">
                            <Outlet />
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/5">
                            <div className="p-4">
                                {/* <WaitlistWidget /> */}
                            </div>
                            <div className="grow" />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}