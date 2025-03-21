import { FaSchoolFlag } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RiGroupLine, RiHome9Line } from "react-icons/ri";
import { SlCalculator } from "react-icons/sl";
import { NavLink } from "react-router-dom";

import logo from "../../assets/slack.png";

const NavBar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-[#357ef0] text-white" : ""
                    }
                    to={"/"}
                >
                    <RiHome9Line />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-[#357ef0] text-white" : ""
                    }
                    to={"/individualResult"}
                >
                    <GrUserManager />
                    Individual Result
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-[#357ef0] text-white" : ""
                    }
                    to={"/group"}
                >
                    <RiGroupLine />
                    Group Result
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-[#357ef0] text-white" : ""
                    }
                    to={"/instituteResult"}
                >
                    <FaSchoolFlag />
                    Institute Result
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-[#357ef0] text-white" : ""
                    }
                    to={"/notice"}
                >
                    <IoNotificationsCircleOutline />
                    Notice Board
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "bg-[#357ef0] text-white" : ""
                    }
                    to={"/cgpaCalculator"}
                >
                    <SlCalculator />
                    CGPA Calculator
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100 flex justify-between fixed top-0 z-50">
            <div>
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">
                    <img className="w-[40px] h-[40px]" src={logo} />
                    Result Vhai
                </a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
