"use client"
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'

const FilterArea = () => {

    const [isUp, setisUp] = useState(false);
    const [isShow, setisShow] = useState(false);

    const showFilters = () => {
        setisShow(!isShow);
    };

    const clickChevron = () => {
        setisUp(!isUp);
    };

    const downChevron = () => {
        setisUp(false);
    };

    return (
        <>
            <div>
                <div className='bg-qatar_green relative'>
                    <form action="">
                        <div className='px-[30px] py-[10px]'>
                            <div className='lg:flex justify-between items-center bg-[#74b591] relative'>
                                <input type="search" name="" id="" placeholder='Search'
                                    className='w-[100%] bg-transparent py-[10px] px-[20px] focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[14px] text-white'
                                />
                                <span className='absolute right-0 py-[10px] px-[10px]'>
                                    <AiOutlineSearch className='text-xl text-white' />
                                </span>
                            </div>
                        </div>
                        <div className='lg:flex justify-between px-[30px] pb-[10px]'>
                            <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                <label htmlFor="" className='text-white text-[10px]'>VEHICLE TYPE</label>
                                <div className='relative pb-1'>
                                    <input type="text"
                                        placeholder='Any'
                                        className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                    />
                                    <span className='absolute top-[43%] right-[2%] text-white'>
                                        <BsChevronDown />
                                    </span>
                                </div>
                            </div>
                            <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                <label htmlFor="" className='text-white text-[10px]'>MAKE</label>
                                <div className='relative pb-1'>
                                    <input type="text"
                                        placeholder='Any'
                                        className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                    />
                                    <span className='absolute top-[43%] right-[2%] text-white'>
                                        <BsChevronDown />
                                    </span>
                                </div>
                            </div>
                            <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                <label htmlFor="" className='text-white text-[10px]'>MODEL</label>
                                <div className='relative pb-1'>
                                    <input type="text"
                                        placeholder='Any'
                                        className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                    />
                                    <span className='absolute top-[43%] right-[2%] text-white'>
                                        <BsChevronDown />
                                    </span>
                                </div>
                            </div>
                            <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                <label htmlFor="" className='text-white text-[10px]'>TRIM</label>
                                <div className='relative pb-1'>
                                    <input type="text"
                                        placeholder='Any'
                                        className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                    />
                                    <span className='absolute top-[43%] right-[2%] text-white'>
                                        <BsChevronDown />
                                    </span>
                                </div>
                            </div>
                            <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                <label htmlFor="" className='text-white text-[10px]'>YEAR</label>
                                <div className='relative pb-1'>
                                    <input type="text"
                                        placeholder='Any'
                                        className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                    />
                                    <span className='absolute top-[43%] right-[2%] text-white'>
                                        <BsChevronDown />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px] py-[10px]' onClick={clickChevron}>
                            <div className='flex justify-end items-center gap-2 relative'>
                                <button  className='w-[95px] h-[35px] text-[11px] bg-white text-qatar_green text-center'>SEARCH</button>
                                <button className='w-[90px] h-[35px] text-[11px] border-[1px] text-white'>CLEAR</button>
                                <button onClick={showFilters} type='button' className='w-[50px] mdl:w-[150px] h-[35px] text-[11px] border-[1px] text-white text-left mdl:pl-[10px]'>
                                    <span className='max-mdl:hidden'>VIEW ALL FILTERS</span>
                                    <span className={`hidden text-white max-mdl:flex justify-center items-center text-[16px] font ${isUp ? 'upChevron' : 'downChevron'}`}>
                                        <BsChevronDown />
                                    </span>
                                </button>
                                <span className={`max-mdl:hidden absolute top-[27%] right-[1%] text-white ${isUp ? 'upChevron' : 'downChevron'}`}>
                                    <BsChevronDown />
                                </span>
                            </div>
                        </div>
                        <div className={`px-[30px] py-[10px] bg-qatar_green w-[100%] ${isShow ? 'block' : 'hidden'}`}>
                            <div className='lg:flex justify-between'>
                                <div className='lg:w-[15%]'>
                                    <label htmlFor="" className='text-white text-[10px]'>PRICE</label>
                                    <div className='flex gap-[10px] items-center mt-[10px]'>
                                        <input type="number" name="" id="" placeholder='- Min -'
                                            className='w-[50%] h-[30px] pl-[5px] border-[1px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                        <input type="number" name="" id="" placeholder='- Max -'
                                            className='w-[50%] h-[30px] pl-[5px] border-[1px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                    </div>
                                </div>
                                <div className='lg:w-[15%]'>
                                    <label htmlFor="" className='text-white text-[10px]'>VEHICLE MILEAGE(KM)</label>
                                    <div className='flex gap-[10px] items-center mt-[10px]'>
                                        <input type="number" name="" id="" placeholder='- Min -'
                                            className='w-[50%] h-[30px] pl-[5px] border-[1px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                        <input type="number" name="" id="" placeholder='- Max -'
                                            className='w-[50%] h-[30px] pl-[5px] border-[1px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                    </div>
                                </div>
                                <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                    <label htmlFor="" className='text-white text-[10px]'>LOCATION</label>
                                    <div className='relative pb-1'>
                                        <input type="text"
                                            placeholder='Any'
                                            className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                        <span className='absolute top-[43%] right-[2%] text-white'>
                                            <BsChevronDown />
                                        </span>
                                    </div>
                                </div>
                                <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                    <label htmlFor="" className='text-white text-[10px]'>TYPE</label>
                                    <div className='relative pb-1'>
                                        <input type="text"
                                            placeholder='Any'
                                            className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                          <span className='absolute top-[43%] right-[2%] text-white'>
                                            <BsChevronDown />
                                        </span>
                                    </div>
                                </div>
                                <div className='border-b-[1px] lg:w-[15%] max-lg:mb-[8px]'>
                                    <label htmlFor="" className='text-white text-[10px]'>SORT BY</label>
                                    <div className='relative pb-1'>
                                        <input type="text"
                                            placeholder='Any'
                                            className='mt-[10px] bg-transparent focus-visible:outline-0 placeholder-white placeholder:font-normal placeholder:text-[13px] caret-white text-white'
                                        />
                                        <span className='absolute top-[43%] right-[2%] text-white'>
                                            <BsChevronDown />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end items-center gap-2 mt-[20px]'>
                                <button href='' className='w-[95px] h-[35px] text-[11px] bg-white text-qatar_green text-center'>SEARCH</button>
                                <button href='' className='w-[90px] h-[35px] text-[11px] border-[1px] text-white'>CLEAR</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FilterArea