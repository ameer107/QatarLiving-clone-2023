import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

const BottomHeader = () => {
    return (
        <>
            <div className='flex gap-8 w-full h-[56px] bg-qatar_light max-lg:hidden'>
                <div className='w-[26%] bg-qatar_pink flex justify-between items-center border-t-[1px] border-white border-opacity-20'>
                    <Link href='' className='flex justify-start items-center gap-1 ml-4 pl-2 cursor-pointer'>
                        <FiMenu className='w-[28px] h-[40px] text-white' />
                        <span className='text-white text-sm'>Login</span>
                    </Link>
                    <Link href='' className='w-[69px] h-[36px] cursor-pointer mr-3 bg-qatar_button px-3 flex justify-center items-center gap-1'>
                        <span className='text-white text-4xl font-extralight'>+</span>
                        <span className='text-white text-xs'>Post</span>
                    </Link>
                </div>
                <div className='w-[74%]'>
                    <div className='flex justify-between items-center h-[100%] border-b-[1px] border-qatar_border pr-[50px] font-semibold text-sm'>
                        <div className='text-qatar_blue'>
                            <Link href='/properties'>Properties</Link>
                        </div>
                        <div className='text-qatar_green'>
                            <Link href='/vehicles'>Vehicles</Link>
                        </div>
                        <div className='text-qatar_yellow'>
                            <Link href='/classifieds'>Classifieds</Link>
                        </div>
                        <div className='text-qatar_orange'>
                            <Link href='/services'>Services</Link>
                        </div>
                        <div className='text-qatar_light_yellow'>
                            <Link href='/jobs'>Jobs</Link>
                        </div>
                        <div className='text-qatar_brown'>
                            <Link href='/forums'>Forums</Link>
                        </div>
                        <div className='text-qatar_brown'>
                            <Link href='/events'>Events</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomHeader