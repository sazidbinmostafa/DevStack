import { Suspense, useState } from "react";
import Stacks from "./stacks/Stacks"
import type { IStack } from "../../types/StackType";
import StackCart from "./StackCart/StackCart";


const fetchStacks = async (): Promise<IStack[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return (data)
}

const stacksPromise = fetchStacks();

function Main() {

    const [selectedStacks, setSelectedStacks] = useState<IStack[]>([])

    return (
        <div className="inter container mx-auto">
            <div className="space-y-1 lg:space-y-3 text-center md:text-start">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:font-extrabold">Explore the <span className="brand-text">Technologies</span></h1>
                <p className="text-[#475569] plus-jakarta-sans">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="lg:flex justify-between">
                <Suspense fallback={"Loading..."}>
                    <Stacks stacksPromise={stacksPromise} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks}/>
                </Suspense>
                <StackCart selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
            </div>
        </div>
    )
}

export default Main