import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { sideNavData } from '@/app/utils/sideNav/sideNavData'
import Link from 'next/link'


const SideNav = () => {
    return (
        <>

            <div className='custom-scrollbar w-[280px] h-full fixed top-0 z-50 overflow-y-auto bg-white shadow-md transition-all duration-500 ease-in-out'>
                <div className='p-[15px] flex items-center'>
                    <button>
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
                        sideNavData.data.map((menu, index) => {
                            return (
                                <>
                                    <div key={index} className='pt-[15px] px-[20px]'>
                                        <div className='text-black text-sm font-semibold'>
                                            <Link href={menu.href} className='leading-[100%]'>{menu.title}</Link>
                                        </div>
                                        {
                                            menu.mainmenu.map((name, index) => {
                                                return (
                                                    <div key={index} className='mt-[15px] last:border-t-[1px]'>
                                                        <div className={`${name.color} text-sm font-semibold leading-[30px]`}>
                                                            <Link href={name.href}>{name.title}</Link>
                                                        </div>
                                                        {
                                                            name.Submenu.map((sublinks, index) => {
                                                                return (
                                                                    <div key={index} className={`text-xs ${sublinks.color} leading-[25px] pl-[5px]`}>
                                                                        <Link href={sublinks.href}>{sublinks.titel}</Link>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                    <div className='pb-[15px] px-[20px]'>

                        {
                            sideNavData.pages.map((name, index) => {
                                return (
                                    <div key={index} className='mt-[20px] text-black text-sm font-semibold'>
                                        <Link href={name.href}>{name.title}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default SideNav