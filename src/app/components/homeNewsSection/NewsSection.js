import React from 'react'
import { homeNewsSection } from '@/app/utils/homeNewsSection'
import Image from 'next/image'
import Link from 'next/link'

export const NewsSection = () => {
    return (
        <>
            <div className='lg:w-[95%] w-full max-mdl:pt-[65px]'>
                <div className='lg:flex max-lg:px-[15px]'>
                    {
                        homeNewsSection.newsData.map((news, index) => (
                            <>
                                <div className='w-full lg:w-[68%] lg:pr-[15px] lg:border-r-[1px]'>
                                    <div key={index} className=''>
                                        <Link href=''>
                                            <Image
                                                src={news.news_main_image}
                                                width={726}
                                                height={408}
                                                className='w-[100%]'
                                            />
                                        </Link>
                                        <h1 className='my-[10px] text-[20px]'>
                                            <Link href='' className='text-[26px] font-semibold leading-[1.3rem]'>
                                                {news.news_main_title}
                                            </Link>
                                        </h1>
                                        <p className='text-[15px] max-w-[638px] mb-[10px] leading-[1.3rem] font-light'>
                                            {news.news_main_desc}
                                        </p>
                                    </div>
                                    <div className='pt-[15px]'>
                                        {
                                            news.newsLatests.map((latestnews, index) => (
                                                <div key={index} className='lg:flex gap-[30px] pb-[15px] mb-[15px] first:border-b-[1px] first:border-qatar_border'>
                                                    <div className='lg:w-[33.33333%] max-lg:mb-3'>
                                                        <Link href=''>
                                                            <Image
                                                                src={latestnews.image}
                                                                width={222}
                                                                height={125}
                                                                className='w-[100%]'
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className='lg:w-[66.66667%]'>
                                                        <div className='text-[10px] text-qatar_pink leading-[.4rem] mb-[12px] uppercase font-[600]'>
                                                            {latestnews.category}
                                                        </div>
                                                        <div>
                                                            <p className='mb-[5px] leading-[20px] text-lighttext'>
                                                                <Link href='' className='text-[16px] leading-[1.3rem] font-semibold'>
                                                                    {latestnews.title}
                                                                </Link>
                                                            </p>
                                                        </div>
                                                        <div className='text-xs leading-[1.42857rem] font-light'>
                                                            {latestnews.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='w-full lg:w-[32%] lg:px-[15px]'>
                                    <div className='mb-[15px] lg:block hidden'>
                                        <Image 
                                            src='https://tpc.googlesyndication.com/simgad/3238062214932909560'
                                            width={300}
                                            height={250}
                                        />
                                    </div>
                                    {
                                        news.sideBarnews.map((news, index) => (
                                            <div key={index} className='flex mb-[10px] pb-[10px] max-lg:gap-[10px] lg:gap-[15px] border-b-[1px] border-qatar_border last:border-b-transparent'>
                                                <Link href='' className='max-lg:w-[20%] w-[47%]'>
                                                    <Image
                                                        src={news.image}
                                                        width={160}
                                                        height={90}
                                                        className='w-[160px] h-[90px]'

                                                    />
                                                </Link>
                                                <div className='max-lg:w-[80%] w-[53%]'>
                                                    <p className='leading-[15px]'>
                                                        <Link href='' className='mb-[6px] font-semibold text-xs'>
                                                            {news.title}
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
