import { Suspense } from "react";
import Stacks from "./stacks/Stacks"
import type { IStack } from "../../types/StackType";


const fetchStacks = async (): Promise<IStack[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return (data)
}


function Main() {

    const stacksPromise = fetchStacks();

    return (
        <div className="inter container mx-auto">
            <div className="space-y-1 lg:space-y-3 text-center md:text-start">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:font-extrabold">Explore the <span className="brand-text">Technologies</span></h1>
                <p className="text-[#475569] plus-jakarta-sans">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
                <Suspense>
                    <Stacks stacksPromise={stacksPromise}/>
                </Suspense>
            </div>
        </div>
    )
}

export default Main