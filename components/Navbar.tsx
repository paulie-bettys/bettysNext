import React from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="fixed w-full h-30 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-16">
                <Link href="/">
                <Image
                    src='/favicon.png'
                    alt='Favicon'
                    width="100"
                    height="100"
                    className="cursor-pointer"
                    priority
                />
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/whybettys">
                            <li className="ml-10 hover:border-b text-xl">Why Betty&apos;s</li>
                        </Link>
                        <Link href="/history">
                            <li className="ml-10 hover:border-b text-xl">Our History</li>
                        </Link>
                        <Link href="/bettyslife">
                            <li className="ml-10 hover:border-b text-xl">Life at Betty&apos;s</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 hover:border-b text-xl">Contact Us</li>
                        </Link>
                        <Link 
                            href="https://prodadmin.myxplor.com/enrollment/index/SUpoSHAzQkxrUXJWb0h1bFFGd0F4Zz09"
                            className="ml-10 hover:border-b text-xl"
                        >
                            Join the Waitlist
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen p-10 bg-[#ecf0f3] ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul className="flex-col py-4">
                        <Link href="/">
                            <li
                                onClick={() => setMenuOpen(false)} 
                                className="py-4 cursor-pointer"
                            >
                            Home
                            </li>
                        </Link>
                        <Link href="/history">
                            <li
                                onClick={() => setMenuOpen(false)} 
                                className="py-4 cursor-pointer"
                            >
                            Our History
                            </li>
                        </Link>
                        <Link href="/bettyslife">
                            <li
                                onClick={() => setMenuOpen(false)} 
                                className="py-4 cursor-pointer"
                            >
                            Life at Betty&apos;s
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li
                                onClick={() => setMenuOpen(false)} 
                                className="py-4 cursor-pointer"
                            >
                            Contact Us
                            </li>
                        </Link>
                        <Link href="/whybettys">
                            <li
                                onClick={() => setMenuOpen(false)} 
                                className="py-4 cursor-pointer"
                            >
                            Why Betty&apos;s
                            </li>
                        </Link>
                        <Link 
                            href="https://prodadmin.myxplor.com/enrollment/index/SUpoSHAzQkxrUXJWb0h1bFFGd0F4Zz09"
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Join the Waitlist
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar