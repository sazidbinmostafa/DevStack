import bannerStack from "../../assets/banner-stack.png"


function Banner() {
    return (
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-5 items-center md:gap-10 text-center md:text-start my-10 justify-between ">
            <div className="space-y-5 lg:col-span-3">
                <h1 className="text-3xl lg:text-6xl font-extrabold">
                    Build Your Ideal <br />
                    <span className="brand-text">Development Stack</span>
                </h1>
                <p className="text-[#475569] text-wrap md:text-lg plus-jakarta-sans">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex gap-3 mx-auto w-fit md:w-full">
                    <button className="btn btn-lg brand text-white rounded-xl">Explore Technologies</button>
                    <button className="btn btn-lg btn-outline text-[#475569] border-[#475569] rounded-xl">Learn More</button>
                </div>
            </div>
            <div className="lg:col-span-2">
                <img className="w-full" src={bannerStack} alt="" />
            </div>
        </div>
    )
}

export default Banner