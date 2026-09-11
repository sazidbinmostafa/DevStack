import logo from "../../assets/logo-text.png"

function Footer() {
    return (
        <div className="border-t border-[#d3d3d3] mt-14">
            <footer className=" text-[#6B7280]  container mx-auto">
                <div className="footer sm:footer-horizontal py-8 mx-auto lg:mx-0 w-fit lg:w-full">
                    <aside className="space-y-3 text-center lg:text-start">
                        <img className="mx-auto lg:mx-0" src={logo} alt="" />
                        <p>Curated tools, technologies, and resources for developers building modern software.</p>
                        <div className="mx-auto lg:mx-0">
                            <ul className="flex items-center gap-3">
                                <li><a className="text-[#4B5563] font-semibold" target="_blank" href="https://github.com/sazidbinmostafa/DevStack">Github</a></li>
                                <li><a className="text-[#4B5563] font-semibold" href="#Twitter">Twitter</a></li>
                                <li><a className="text-[#4B5563] font-semibold" href="#LinkedIn">LinkedIn</a></li>
                            </ul>
                        </div>
                    </aside>
                    <div className="hidden lg:flex justify-between w-full">
                        <nav className="flex flex-col gap-1">
                            <h6 className="footer-title text-[#0F172A]">PRODUCT</h6>
                            <a href="#" className="link link-hover text-[#94A3B8]">Home</a>
                            <a className="link link-hover text-[#94A3B8]">Technologies</a>
                            <a className="link link-hover text-[#94A3B8]">Projects</a>
                        </nav>
                        <nav className="flex flex-col gap-1">
                            <h6 className="footer-title text-[#0F172A] ">Company</h6>
                            <a className="link link-hover text-[#94A3B8]">About</a>
                            <a className="link link-hover text-[#94A3B8]">Contact</a>
                            <a className="link link-hover text-[#94A3B8]">Carrers</a>
                        </nav>
                        <nav className="flex flex-col gap-1">
                            <h6 className="footer-title text-[#0F172A]">Legal</h6>
                            <a className="link link-hover text-[#94A3B8]">Privacy policy</a>
                            <a className="link link-hover text-[#94A3B8]">Terms of service</a>
                        </nav>
                    </div>
                </div>
                <div className="border-t border-[#d3d3d3] my-5 py-5 flex justify-between items-center text-[#94A3B8] text-sm mx-auto px-5 lg:px-0">
                    <div>
                        <p>© 2026 Dev Stack. All rights reserved.</p>
                    </div>
                    <nav className="flex gap-3">
                        <a className="link link-hover">Privacy</a>
                        <a className="link link-hover">Terms</a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer