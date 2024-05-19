import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Home</h1>
            <div>
                <p>Welcome to the home page</p>
                {count}
                <Button onClick={() => setCount(count + 1)}>Add</Button>
            </div>
        </div>
    );
}