import React from 'react'
import Link from 'next/link'
import { healthNewsData } from '@/app/utils/homeData/healthNewsData'
import Image from 'next/image'

const AllNews = () => {
    return (
        <>
            <div className='mb-[15px]'>
                <div>
                    {
                        healthNewsData.data.map((news, index) => (
                            <>
                            <div key={index} className='lg:flex mb-[30px]'>
                                <div key={index} className='lg:w-[16.66667%] px-[15px] relative max-mdl:mb-5'>
                                    <div className='lg:ml-[20px] pt-[10px] text-[18px] font-semibold before:border-[2px] before:border-b-0 before:my-[5px] before:w-[40px] before:absolute before:top-[0px] before:border-qatar_brown'>
                                        <Link href='/'>
                                            {news.news_title}
                                        </Link>
                                    </div>
                                </div>
                                <div className='lg:w-[33.33333%] px-[15px]'>
                                    {
                                        news.medium_box_news.map((mediumNews, index) => (
                                            <div>
                                                <div key={index} className='relative'>
                                                    <Link href={mediumNews.title_href}>
                                                        <Image
                                                            src={mediumNews.image}
                                                            width={348}
                                                            height={196}
                                                            className='w-full'
                                                        />
                                                    </Link>
                                                <div className='text-white font-semibold text-[10px] bg-qatar_pink px-[6px] py-[4px] text-center h-[20px] tracking-[.8px] absolute bottom-[-10px] left-0'>
                                                    {mediumNews.category}
                                                </div>
                                                </div>
                                                <h3 className='mt-[20px] mb-[10px] font-semibold text-[16px] leading-[1.3rem] text-[#222]'>
                                                    <Link href={mediumNews.title_href}>
                                                        {mediumNews.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='lg:w-[16.66667%] px-[15px]'>
                                    {
                                        news.small_boxes_news.map((news, index) => (
                                            <div key={index}>
                                                <Link href={news.title_href}>
                                                    <Image
                                                        src={news.image}
                                                        width={160}
                                                        height={90}
                                                        className='w-full'
                                                    />
                                                </Link>
                                                <h3 className='mt-[6px] mb-[10px] text-[13px] font-semibold text-[#222] leading-[1.5rem]'>
                                                    <Link href={news.title_href}>
                                                        {news.title}
                                                    </Link>
                                                </h3>
                                            </div>

                                        ))
                                    }
                                </div>
                                <div className='lg:w-[33.33333%] px-[15px]'>
                                    {
                                        news.sidebar_news.map((news, index) => (
                                            news.image !== "" || news.title !== "" || news.title_href !== "" ? (
                                                <div key={index} className='flex mb-[10px] pb-[10px] max-lg:gap-[10px] lg:gap-[15px] border-b-[1px] border-qatar_border last:border-b-transparent'>
                                                    <Link href={news.title_href} className='max-lg:w-[20%] w-[47%] max-lg:min-w-[150px] max-lg:max-w-[160px]:'>
                                                        <Image
                                                            src={news.image}
                                                            width={160}
                                                            height={90}
                                                            className='w-[160px] h-[90px]'

                                                        />
                                                    </Link>
                                                    <div className='max-lg:w-[70%] w-[53%]'>
                                                        <p className='leading-[15px]'>
                                                            <Link href={news.title_href} className='mb-[6px] font-semibold text-xs'>
                                                                {news.title}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : null

                                        ))
                                    }
                                </div>
                            </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllNews