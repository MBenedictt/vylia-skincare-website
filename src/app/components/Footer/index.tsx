"use client";

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div className='w-full bg-gradient-to-t from-white to-green-100'>
            <div className='px-10 py-10 flex justify-between items-center max-[991px]:flex-col max-[991px]:items-start'>
                <div className='w-[500px] max-lg:w-[400px] max-sm:w-full'>
                    <h1 className='text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-emerald-500 mb-4 leading-[75px] max-lg:leading-[60px] max-sm:leading-[50px] max-sm:w-3/4'>Treat Your Skin With Love</h1>
                </div>
                <div className='grid grid-cols-2 gap-10 mr-20 max-[991px]:mr-0 max-[991px]:mt-10'>
                    <ul>
                        <li className='text-emerald-500 text-[18px] pb-1'>Discover</li>
                        <li className='py-1 text-gray-500 font-[300] hover:text-gray-700'><Link href="/">Home</Link></li>
                        <li className='py-1 text-gray-500 font-[300] hover:text-gray-700'><Link href="/">Product</Link></li>
                        <li className='py-1 text-gray-500 font-[300] hover:text-gray-700'><Link href="/">Store</Link></li>
                    </ul>
                    <ul>
                        <li className='text-emerald-500 text-[18px] pb-1'>About Us</li>
                        <li className='py-1 text-gray-500 font-[300] hover:text-gray-700'><Link href="/">Contact</Link></li>
                        <li className='py-1 text-gray-500 font-[300] hover:text-gray-700'><Link href="/">FAQs</Link></li>
                        <li className='py-1 text-gray-500 font-[300] hover:text-gray-700'><Link href="/">Terms & Conditions</Link></li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between items-center px-10 py-7 border-t border-gray-300'>
                <h1 className='text-3xl font-limelight text-emerald-500'>Vylia</h1>
                <div className='flex items-center gap-3'>
                    <Link href="/" className="px-2 py-[3px] bg-black rounded-full text-white"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link href="/" className="px-2 py-[3px] bg-black rounded-full text-white"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                    <Link href="/" className="px-2 py-[3px] bg-black rounded-full text-white"><FontAwesomeIcon icon={faTiktok} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;