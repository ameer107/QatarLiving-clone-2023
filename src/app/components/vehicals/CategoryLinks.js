import React from 'react'
import Link from 'next/link'
import { categorylinksCars } from '@/app/utils/vehicals/categorylinksCars'

const CategoryLinks = () => {
    return (
        <>

            <div className='flex justify-between px-[30px] bg-qatar_green'>
                {
                    categorylinksCars.data.map((links, index) => {
                        return (
                            <div key={index} className={`text-[11px] font-semibold text-white px-[6px] py-[15px] ${links.style}`}>
                                <Link href={links.href}>{links.name}</Link>
                            </div>
                        )
                    }
                    )


                }
            </div>
        </>
    )
}

export default CategoryLinks