import { useState, type Dispatch, type SetStateAction } from "react";
import type { IStack } from "../../../types/StackType"
import { IoStar } from "react-icons/io5";


interface StackProps {
    stack: IStack;
    selectedStacks: IStack[];
    setSelectedStacks: Dispatch<SetStateAction<IStack[]>>;
}

function Stack({ stack, selectedStacks, setSelectedStacks }: StackProps) {


    const added = selectedStacks.some((s) => s.id === stack.id);


    const handleOnClick = () => {
        if (!added) {
            setSelectedStacks([...selectedStacks, stack])
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm md:w-72">
            <div className="card-body space-y-1">
                <div className="flex justify-between">
                    <h2 className="card-title"><img width={"30px"} src={stack.icon} alt="" />{stack.name}</h2>
                    <div className="badge badge-soft badge-info rounded-3xl">{stack.badge}</div>
                </div>
                <p>{stack.description}</p>
                <div className="divider my-1"></div>
                <div className="flex items-center justify-between">
                    <div className="badge badge-ghost">{stack.category}</div>
                    <div className="text-[#475569] text-sm">{stack.difficulty}</div>
                    <div className="flex gap-1 items-center text-[#F59E0B]"><IoStar></IoStar> {stack.rating}</div>
                </div>
                <div className="card-actions">
                    <button onClick={handleOnClick} className={added ? "btn btn-soft w-full text-sm rounded-lg btn-disabled pointer-events-auto cursor-not-allowed" : "btn text-white bg-[#111827] w-full text-sm rounded-lg"}>{added ? "Added to Stack" : "Add to Stack"}</button>
                </div>
            </div>
        </div>
    )
}

export default Stack