import React from 'react'
import Link from 'next/link'
import { newsCaption } from '@/app/utils/homeData/newsCaption'

const NewsCaption = () => {
    return (
        <>
            <div className='my-[25px] py-[15px] px-[15px] bg-[#f7f7f7] lg:min-h-[94px]'>
                <div className='lg:flex'>
                    {
                        newsCaption.captioTitles.map((news, index) => {
                            return (
                                <div key={index} className='lg:px-[15px] lg:w-[25%] w-[100%] mb-[15px] max-mdl:border-b-[1px] max-mdl:border-qatar_border'>
                                    <p>
                                        <Link href={news.title_href} className='text-[13px] text-[#222] leading-[1.3rem] font-semibold'>
                                            {news.title}
                                        </Link>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NewsCaption