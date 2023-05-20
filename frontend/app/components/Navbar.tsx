import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import Logo from ".././../public/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import LazyLoadingImage from './LazyLoadingImage'



const Navbar = () => {
    return (
        <>
            <section className=' bg-white z-10 border-b border-slate-100'>
                <section className='flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-4'>
                    <div>
                        <Link href="/">
                            <LazyLoadingImage
                                src={Logo}
                                alt="logo"
                                className="block max-h-8 sm:max-h-10"
                                height={"100"}
                                width={"100"}
                                local={true}
                            />
                        </Link>
                    </div>
                    <div className='flex space-x-5'>
                        <div>
                            <p className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-4 py-2.5'>Men</p>
                        </div>
                        <div>
                            <p className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-4 py-2.5'>Women</p>
                        </div>
                        <div>
                            <p className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-4 py-2.5'>Beauty</p>
                        </div>
                        <div>
                            <p className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-4 py-2.5'>Sport</p>
                        </div>
                        <div>
                            <p className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-4 py-2.5'>Explore</p>
                        </div>
                    </div>
                    <section className='flex space-x-4'>
                        <div className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-3 py-3'>
                            <CiSearch size={23} className="font-medium text-sm" />
                        </div>
                        <div className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-3 py-3'>
                            <AiOutlineUser size={23} />
                        </div>
                        <div className='font-medium text-sm text-slate-600 rounded-full hover:text-slate-900 hover:bg-slate-100 px-3 py-3'>
                            <BsCartPlus size={23} />
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Navbar

