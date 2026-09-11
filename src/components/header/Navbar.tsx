import logo from "../../assets/logo-text.png"

const NavMenu = () => {
    return <>
        <li><a href="#" className="text-[#DB2777]">Home</a></li>
        <li><a className="text-[#475569]">Technologies</a></li>
        <li><a className="text-[#475569]">Projects</a></li>
        <li><a className="text-[#475569]">About</a></li>
        <li><a className="text-[#475569]">Contact</a></li>
    </>
}

function Navbar() {
    return (
        <div className="shadow-sm plus-jakarta-sans">
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavMenu />
                        </ul>
                    </div>
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-sm">
                        <NavMenu />
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn btn-ghost rounded-3xl text-[#475569]">Sign In</button>
                    <button className="btn btn-secondary rounded-3xl">Sign Up</button>
                </div>
            </div>
        </div>
    )
}


export default Navbar
