import type { Dispatch, SetStateAction } from "react";
import type { IStack } from "../../../types/StackType"
import StackCard from "./StackCard";
import { toast } from "react-toastify";



interface Props {
    selectedStacks: IStack[];
    setSelectedStacks: Dispatch<SetStateAction<IStack[]>>
}


function StackCart({ selectedStacks, setSelectedStacks }: Props) {

    const handleOnClick = () => {
        setSelectedStacks([])
        toast.error("All technologies are removed from Stack")
    }

    return (
        <div className="card bg-base-100 w-96 mx-auto md:mx-0 md:w-72 shadow-sm h-fit my-8">
            <div className="card-body space-y-3">
                <h1 className="text-[#0F172A] font-bold plus-jakarta-sans my-0">Your Stack</h1>
                {
                    selectedStacks.length > 0 ? selectedStacks.length > 1 ? <p className="text-[#94A3B8]">{selectedStacks.length} Technologies Selected</p> : <p className="text-[#94A3B8]">{selectedStacks.length} Technology Selected</p> : <>
                        <p className="text-[#94A3B8]">No Technologies Selected Yet</p>
                        <div className="rounded-lg p-3 border border-dashed border-[#94A3B8]">
                            <h3 className="text-[#94A3B8]">Your Stack is Empty</h3>
                        </div>
                    </>
                }
                {
                    selectedStacks.map(item => <StackCard key={item.id} stack={item} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />)
                }
                {
                    selectedStacks.length > 0 ? <button onClick={handleOnClick} className="btn btn-soft btn-error w-full">Remove All</button> : <></>
                }
            </div>
        </div>
    )
}

export default StackCart