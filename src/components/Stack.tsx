import type { IStack } from "../types/StackType"


interface StackProps {
    stack: IStack;
}

function Stack({stack}:StackProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title"><img width={"30px"} src={stack.icon} alt="" />{stack.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Stack