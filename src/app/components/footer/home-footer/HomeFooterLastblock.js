import React from 'react'
import { footelastblockdata } from '@/app/utils/footelastblockdata'
import Link from 'next/link'

const HomeFooterLastblock = () => {
    return (
        <>
        <div className='max-w-screen-maxW m-auto lg:px-[15px]'>
            <div className='p-[15px] mt-[20px]'>
                <div className='flex items-center lg:gap-15 flex-wrap max-mdl:[&>*:nth-child(2)]:border-b-2 max-mdl:[&>*:nth-child(1)]:border-b-2'>
                    {
                        footelastblockdata.lastblockData.map((info, index) => (
                            <div key={index} className='w-[25%] max-mdl:w-[50%] max-mdl:p-3 text-xs mb-2'>
                                <p>{info.info_text}</p>
                                <Link className='text-qatar_pink' href={info.info_link_href}>{info.info_link_text}</Link>
                                <Link className='text-qatar_pink' href={info.info_link_1_href}>{info.info_link_1_text}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeFooterLastblock