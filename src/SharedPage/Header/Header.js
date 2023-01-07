import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const logoutHandler=()=>{
        logOut()
        .then(()=>{
            toast.success("Logout successfull!!")
        })
    }
    return (
        <div className='mx-5'>
                    <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabIndex={0}>
                            <Link className="justify-between">
                                FEATURES
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </Link>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            <li><Link>PRICING</Link></li>
                            <li tabIndex={0}>
                            <Link className="justify-between">
                                RESOURCES
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </Link>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            <li tabIndex={0}>
                            <Link className="justify-between">
                                THINKIFIC PLUS
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </Link>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            <Link to='/signIn' className='mr-4 hover:link-hover'>Sign in</Link>
                        </ul>
                        </div>
                        <Link className="text-lg">THINKIFIC</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                FEATURES
                                <FaChevronDown />
                            </Link>
                            <ul className="p-2 z-10 bg-base-100">
                                <li tabIndex={0}>
                            <Link className="justify-between">
                            Create Amaizing Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link>Online coursese platfrom</Link></li>
                                <li><Link>learning communitice</Link></li>
                                
                            </ul>
                            </li>
                                <li><Link>Build website to Market your bussness</Link></li>
                                <li><Link>Generate income by sellikng</Link></li>
                                <li><Link>Grow and scale your bussness</Link></li>
                            </ul>
                            </li>
                            <li><Link>PRICING</Link></li>
                            <li tabIndex={0}>
                            <Link className="justify-between">
                                RESOURCES
                                <FaChevronDown />
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link>Blog</Link></li>
                                <li><Link>Customer Example</Link></li>
                                <li><Link>Thinkifin Academy</Link></li>
                                <li><Link>Thinkifin app store</Link></li>
                            </ul>
                            </li>
                            <li tabIndex={0}>
                            <Link className="justify-between">
                                THINKIFIC PLUS
                                <FaChevronDown />
                            </Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                    {user?.email ? <><Link onClick={logoutHandler} className='mr-4 hover:link-hover'>Sign out</Link></>:<><Link to='/signIn' className='mr-4 hover:link-hover'>Sign in</Link></> 
                    }
                       <a target="_blank" className="bg-[#E29E51] p-7"  href="https://courses.thinkific.com/onboarding/steps/account">GET STARTED FREE</a> 
                    </div>
                    </div>
        </div>
    );
};

export default Header;