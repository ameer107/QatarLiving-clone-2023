"use client"
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs'
import { footerPagesLinks } from '@/app/utils/fotterPagesLinks';
import { useState } from 'react';


const HomeFooterPages = () => {

    return (
        <>
            <div className='bg-qatar_dark_bg p-[15px] mt-[40px]'>
                <div className='flex w-full max-mdl:flex-col'>
                    {
                        footerPagesLinks.pageslinksData.map((name, index) => (
                            <div key={index}
                                className={`max-mdl:w-full w-[25%] max-mdl:flex max-mdl:items-center max-mdl:justify-between max-mdl:mb-[10px] tracking-wide font-bold text-base ${name.color} max-mdl:border-b-[1px] border-qatar_border max-mdl:pb-2`}
                            >
                                <Link href={name.head_href}>{name.text}</Link>
                                <span
                                    className='text-qatar_border text-2xl font-extrabold max-mdl:block hidden cursor-pointer'
                                    // onClick={() => toggleCategory(index)}
                                >
                                    <BsChevronRight />
                                </span>
                            </div>
                        ))

                    }
                </div>
                <div className='flex mt-[20px] w-full max-mdl:flex-col'>
                    {
                        footerPagesLinks.pageslinksData.map((name, index) => (
                            <div key={index} className='max-mdl:w-full w-[25%] leading-[2rem] text-lighttext text-sm font-semibold tracking-wide max-mdl:mb-2 max-mdl:hidden'>
                                {name.sublinks.map((sublink, subIndex) => (
                                    <div key={subIndex}>
                                        <Link href={sublink.sublinks_href}>{sublink.sublinks_text}</Link>
                                    </div>
                                ))}
                            </div>
                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default HomeFooterPages