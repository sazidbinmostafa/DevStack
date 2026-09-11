import type { Dispatch, SetStateAction } from "react";
import type { IStack } from "../../../types/StackType"

interface StackProps {
    stack: IStack;
    selectedStacks: IStack[];
    setSelectedStacks: Dispatch<SetStateAction<IStack[]>>
}

function StackCard({ stack, selectedStacks, setSelectedStacks }: StackProps) {

    const handleOnClick = () =>{
        const remainingStacks = selectedStacks.filter(s=> s.id !== stack.id)
        setSelectedStacks(remainingStacks)
    }

    return (
        <div className="card bg-base-100 w-84 md:w-60 shadow-sm">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img width={"30px"} src={stack.icon} alt="" />
                        <div>
                            <h3 className="text-[#0F172A]">{stack.name}</h3>
                            <p className="text-xs text-[#94A3B8]">{stack.category}</p>
                        </div>
                    </div>

                    <button onClick={handleOnClick} className="btn btn-square btn-sm">
                        <svg
                            aria-label="Close"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StackCard