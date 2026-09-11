import { use, type Dispatch, type SetStateAction } from "react";
import Stack from "./Stack";
import type { IStack } from "../../../types/StackType";

interface StacksProps {
    stacksPromise: Promise<IStack[]>;
    selectedStacks: IStack[];
    setSelectedStacks: Dispatch<SetStateAction<IStack[]>>;
}

function Stacks({stacksPromise,selectedStacks, setSelectedStacks}:StacksProps) {

    const stacks = use(stacksPromise)

    
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center my-8">
            {
                stacks.map(item=> <Stack key={item.id} stack={item} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks}/>)
            }
        </div>
    )
}

export default Stacks