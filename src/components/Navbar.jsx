import { NavLink } from "react-router-dom";
import BtnPrimary from "./BtnPrimary";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto px-28">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/statistic'>Statistic</NavLink></li>
                        <li><NavLink to='applied'>Applied Jobs</NavLink></li>
                        <li><NavLink to='blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-extrabold">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex justify-between items-center font-medium gap-12 text-lg">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/statistic'>Statistic</NavLink></li>
                    <li><NavLink to='applied'>Applied Jobs</NavLink></li>
                    <li><NavLink to='blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <BtnPrimary name={'Start Applying'}></BtnPrimary>
            </div>
        </div>
    );
};

export default Navbar;