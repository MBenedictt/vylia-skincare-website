"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ShoppingBag, ChevronDown, ChevronUp } from "lucide-react";
import { Limelight } from "next/font/google";

const limelight = Limelight({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-limelight",
});

const Navbar = () => {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => setOpen((prev) => !prev);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    useEffect(() => {
        if (!isHome) return; // Only track scroll on home

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]);

    const bgClass = isHome && !isScrolled ? "bg-transparent" : "bg-white shadow-md";
    const textClass = isHome && !isScrolled ? "text-white" : "text-gray-700";
    const brandColor = isHome && !isScrolled ? "text-white" : "text-emerald-500";

    return (
        <div
            className={`w-full h-[70px] fixed top-0 left-0 flex justify-between items-center px-10 max-md:px-5 z-50 transition-all duration-300 ${bgClass} ${textClass}`}
        >


            <ul className="flex items-center gap-10 max-md:gap-5 max-sm:gap-3">
                <li className="font-semibold md:hidden">
                    <i
                        onClick={toggleDrawer}
                        className="hover:text-emerald-200 hover:transition-colors py-1 px-2 rounded-xl cursor-pointer"
                    >
                        <Menu />
                    </i>
                </li>
                <li className="font-semibold md:hidden">
                    <i
                        onClick={toggleDrawer}
                        className="hover:text-emerald-200 hover:transition-colors py-1 px-2 rounded-xl cursor-pointer"
                    >
                        <Search className="w-5 h-5" />
                    </i>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="flex">
                        <span className="hover:text-emerald-400 hover:transition-colors max-lg:text-[14px]">Home</span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="flex">
                        <span className="hover:text-emerald-400 hover:transition-colors max-lg:text-[14px]">Product</span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="flex">
                        <span className="hover:text-emerald-400 hover:transition-colors max-lg:text-[14px]">Store</span>
                    </Link>
                </li>
            </ul>

            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <h1 className={`font-bold text-4xl italic ${limelight.className} ${brandColor} hover:text-emerald-500 hover:transition-colors`}>
                        Vylia
                    </h1>
                </Link>
            </div>

            <ul className="flex items-center gap-10">
                <li className="font-semibold md:hidden">
                    <i
                        onClick={toggleDrawer}
                        className="text-2xl hover:text-emerald-200 hover:transition-colors py-1 px-2 rounded-xl cursor-pointer"
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </i>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="relative group flex">
                        <span className="hover:text-emerald-400 hover:transition-colors max-lg:text-[14px]">Search</span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="relative group flex">
                        <span className="hover:text-emerald-400 hover:transition-colors max-lg:text-[14px]">Cart(0)</span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="/" className="relative group flex">
                        <span className="hover:text-emerald-400 hover:transition-colors max-lg:text-[14px]">Login</span>
                    </Link>
                </li>
            </ul>



            <div
                className={`fixed top-0 left-0 z-40 h-screen shadow-xl p-4 bg-white w-80 transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    type="button"
                    onClick={toggleDrawer}
                    className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center"
                >
                    <X className="w-6 h-6 text-gray-700 cursor-pointer" />
                </button>
                <div className='flex flex-col h-[90%]'>
                    <ul className='flex flex-col items-center mt-10'>
                        <li className="font-medium text-2xl py-6 border-t border-gray-300 w-full">
                            <Link href="/" className="">
                                <span className="text-gray-700 hover:text-emerald-500 hover:transition-colors">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-6 border-t border-gray-300 w-full">
                            <button
                                onClick={toggleDropdown}
                                className="w-full text-left text-gray-700 hover:text-emerald-500 transition-colors cursor-pointer"
                            >
                                <span>Our Products</span>
                                {open ? (
                                    <ChevronUp className="inline w-5 h-5 ml-2" />
                                ) : (
                                    <ChevronDown className="inline w-5 h-5 ml-2" />
                                )}
                            </button>

                            {/* Dropdown list */}
                            {open && (
                                <ul className="mt-4 pl-4 space-y-3 text-lg text-gray-600">
                                    <li className="py-1">
                                        <Link href="/" className="hover:text-emerald-500 hover:transition-colors font-thin">
                                            Skincare
                                        </Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href="/" className="hover:text-emerald-500 hover:transition-colors font-thin">
                                            Makeup
                                        </Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href="/" className="hover:text-emerald-500 hover:transition-colors font-thin">
                                            Fragrance
                                        </Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href="/" className="hover:text-emerald-500 hover:transition-colors font-thin">
                                            Bodycare
                                        </Link>
                                    </li>
                                    <li className="py-1">
                                        <Link href="/" className="hover:text-emerald-500 hover:transition-colors font-thin">
                                            Bundle Package
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="font-medium text-2xl py-6 border-t border-gray-300 w-full">
                            <Link href="/" className="">
                                <span className="text-gray-700 hover:text-emerald-500 hover:transition-colors">
                                    Our Store
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-6 border-t border-gray-300 w-full">
                            <Link href="/" className="">
                                <span className="text-gray-700 hover:text-emerald-500 hover:transition-colors">
                                    Login
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;