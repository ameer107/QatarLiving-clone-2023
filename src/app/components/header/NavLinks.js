import React from 'react'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'

const NavLinks = () => {
  return (
    <>
            <div className='flex gap-8 w-full bg-qatar_light max-lg:hidden py-[10px] mb-[20px]'>
                <div className='w-[26%] flex items-end justify-start'>
                    <div className='ml-[20px] mr-5 mb-2 pb-1 border-b-[1px] border-qatar_border w-[100%] relative'>
                        <AiOutlineSearch 
                            className='absolute top-[7%] left-[2%] text-xl font-extrabold'
                        />
                        <input 
                            className='focus-visible:outline-0 bg-transparent pl-[30px] w-[100%] placeholder-black placeholder:font-semibold placeholder:text-xs'
                            type="search" 
                            name=""
                            placeholder='Search'
                        />
                    </div>
                </div>
                <div className='w-[74%]'>
                    <div className='flex items-center font-semibold text-xs pr-[50px] px-[5px]'>
                        <ul className='w-[147px] leading-[1.42857rem] text-qatar_blue tracking-wide'>
                            <li><Link href='/apartment'>Apartment</Link></li>
                            <li><Link href='/villa'>Villa</Link></li>
                            <li><Link href='/shared'>Shared</Link></li>
                            <li><Link href='/officespace'>Office Space</Link></li>
                        </ul>
                        <ul className='w-[132px] leading-[1.42857rem] text-qatar_green tracking-wide'>
                            <li><Link href='/4x4/-suv'>4x4/SUV</Link></li>
                            <li><Link href='/car-sedan'>Car/Sedan</Link></li>
                            <li><Link href='/car-rental'>Car Rental</Link></li>
                            <li><Link href='/show-rooms'>Showrooms</Link></li>
                        </ul>
                        <ul className='w-[148px] leading-[1.42857rem] text-qatar_yellow tracking-wide'>
                            <li><Link href='/furniture-decor'>Furniture & Decor</Link></li>
                            <li><Link href='/electronics'>Electronics</Link></li>
                            <li><Link href='/fashion-beauty'>Fashion & Beauty</Link></li>
                            <li><Link href='/phones-tablets'>Phones & Tablets</Link></li>
                        </ul>
                        <ul className='w-[136px] leading-[1.42857rem] text-qatar_orange tracking-wide'>
                            <li><Link href='/labor-moving'>Labor & Moving</Link></li>
                            <li><Link href='/household-services'>Household Services</Link></li>
                            <li><Link href='/cleaning-services'>Cleaning Services</Link></li>
                            <li><Link href='/computer-services'>Computer Services</Link></li>
                        </ul>
                        <ul className='w-[102px] leading-[1.42857rem] text-qatar_light_yellow tracking-wide'>
                            <li><Link href='/accounting'>Accounting</Link></li>
                            <li><Link href='/hR'>HR</Link></li>
                            <li><Link href='/sales'>Sales</Link></li>
                            <li><Link href='/marketing'>Marketing</Link></li>
                        </ul>
                        <ul className='leading-[1.42857rem] text-qatar_brown tracking-wide'>
                            <li><Link href='/eshops'>eShops</Link></li>
                            <li><Link href='/new-posts'>New Posts</Link></li>
                            <li><Link href='/news'>News</Link></li>
                            <li><Link href='/videos'>Videos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
  )
}

export default NavLinks