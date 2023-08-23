"use client"
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx'
import { sideNavData } from '@/app/utils/sideNav/sideNavData'

const BottomHeader = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openDiv = () => {
        setIsSidebarOpen(true);
    };

    const closeDiv = () => {
        setIsSidebarOpen(false);
    };
    return (
        <>
            <div className='flex gap-8 w-full h-[56px] bg-qatar_light sticky top-0 z-10'>
                <div className='w-[100%] lg:w-[26%] bg-qatar_pink flex justify-between items-center border-t-[1px] border-white border-opacity-20'>
                    <button onClick={openDiv} href='' className='flex justify-start items-center gap-1 ml-4 pl-2 cursor-pointer'>
                        <FiMenu className='w-[28px] h-[40px] text-white' />
                        <span className='text-white text-sm'>Login</span>
                    </button>
                    <Link href='' className='w-[69px] h-[36px] cursor-pointer mr-3 bg-qatar_button px-3 flex justify-center items-center gap-1'>
                        <span className='text-white text-4xl font-extralight'>+</span>
                        <span className='text-white text-xs'>Post</span>
                    </Link>
                </div>
                <div className='max-lg:hidden w-[74%]'>
                    <div className='flex justify-between items-center h-[100%] border-b-[1px] border-qatar_border pr-[35px] font-semibold text-sm'>
                        <div className='text-qatar_blue'>
                            <Link href='/properties'>Properties</Link>
                        </div>
                        <div className='text-qatar_green'>
                            <Link href='/vehicles'>Vehicles</Link>
                        </div>
                        <div className='text-qatar_yellow'>
                            <Link href='/classifieds'>Classifieds</Link>
                        </div>
                        <div className='text-qatar_orange'>
                            <Link href='/services'>Services</Link>
                        </div>
                        <div className='text-qatar_light_yellow'>
                            <Link href='/jobs'>Jobs</Link>
                        </div>
                        <div className='text-qatar_brown'>
                            <Link href='/forums'>Forums</Link>
                        </div>
                        <div className='text-qatar_brown'>
                            <Link href='/events'>Events</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* SideNav */}

            <div className={`custom-scrollbar h-full fixed top-0 z-50 overflow-y-auto bg-white shadow-md transition-all duration-500 ease-in-out ${isSidebarOpen ? 'opened' : 'closed'}`}>
                <div className='p-[15px] flex items-center'>
                    <button onClick={closeDiv}>
                        <RxCross1 className='text-lg' />
                    </button>
                </div>
                <div className='p-[10px] border-t-[1px] border-[#DDD] border-b-[1px] flex gap-2'>
                    <Link href='/'
                        className='w-[48%] leading-[100%] py-[13px] text-[14px] text-center bg-qatar_pink text-white outline-0'
                    >
                        SignIn
                    </Link>
                    <Link href='/'
                        className='w-[48%] leading-[100%] py-[13px] text-[14px] text-center bg-qatar_pink text-white outline-0'
                    >
                        Register
                    </Link>
                </div>
                <div>
                    {
                        sideNavData.data.map((menu, index) => (
                            <>
                                <div key={index} className='pt-[15px] px-[20px]'>
                                    <div className='text-black text-sm font-semibold'>
                                        <Link href={menu.href} className='leading-[100%]'>{menu.title}</Link>
                                    </div>
                                    {
                                        menu.mainmenu.map((name, index) => (
                                            <div className='mt-[15px] last:border-t-[1px]'>
                                                <div key={index} className={`${name.color} text-sm font-semibold leading-[30px]`}>
                                                    <Link href={name.href}>{name.title}</Link>
                                                </div>
                                                {
                                                    name.Submenu.map((sublinks, index) => (
                                                        <div key={index} className={`text-xs ${sublinks.color} leading-[25px] pl-[5px]`}>
                                                            <Link href={sublinks.href}>{sublinks.titel}</Link>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ))
                    }
                    <div className='pb-[15px] px-[20px]'>

                        {
                            sideNavData.pages.map((name, index) => (
                                <div key={index} className='mt-[20px] text-black text-sm font-semibold'>
                                    <Link href={name.href}>{name.title}</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default BottomHeader