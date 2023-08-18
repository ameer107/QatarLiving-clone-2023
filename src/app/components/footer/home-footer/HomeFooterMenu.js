"use client"

import React from 'react'
import Link from 'next/link'
import { footerLinks } from '@/app/utils/footerLinks';
import { BsChevronRight } from 'react-icons/bs'
import { useState } from 'react';

const HomeFooterMenu = () => {
    const [expandedCategories, setExpandedCategories] = useState([]);

    const toggleCategory = (index) => {
        if (expandedCategories.includes(index)) {
            setExpandedCategories(expandedCategories.filter((item) => item !== index));
        } else {
            setExpandedCategories([...expandedCategories, index]);
        }
    };

    return (
        <div className='flex mt-[20px] w-full max-mdl:flex-col'>
            {footerLinks.linksData.map((category, index) => (
                <div key={index} className='max-mdl:w-full w-[25%] px-[15px]'>
                    <div
                        className={`max-mdl:flex max-mdl:items-center max-mdl:justify-between mb-[20px] max-mdl:mb-[10px] tracking-wide font-bold text-base ${category.color} max-mdl:border-b-[1px] border-qatar_border max-mdl:pb-2`}
                    >
                        <Link href={category.head_href}>{category.text}</Link>
                        <span
                            className='text-qatar_border text-2xl font-extrabold max-mdl:block hidden cursor-pointer'
                            onClick={() => toggleCategory(index)}
                        >
                            <BsChevronRight />
                        </span>
                    </div>
                    <div className='leading-[2rem] text-lighttext text-sm font-semibold tracking-wide max-mdl:mb-2 max-mdl:hidden'>
                        {category.sublinks.map((sublink, subIndex) => (
                            <div key={subIndex}>
                                <Link href={sublink.sublinks_href}>{sublink.sublinks_text}</Link>
                            </div>
                        ))}
                    </div>
                    {expandedCategories.includes(index) && (
                        <div className='leading-[2rem] text-lighttext text-sm font-semibold tracking-wide max-mdl:mb-2'>
                            {category.sublinks.map((sublink, subIndex) => (
                                <div key={subIndex}>
                                    <Link href={sublink.sublinks_href}>{sublink.sublinks_text}</Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HomeFooterMenu;