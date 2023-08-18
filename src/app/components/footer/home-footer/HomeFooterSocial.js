import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsTiktok } from 'react-icons/bs'
import { BiLogoSnapchat } from 'react-icons/bi'
import applestore from '../../../../../public/images/footer/badge-app-store.png'
import googlestore from '../../../../../public/images/footer/badge-google-playstore.png'




const HomeFooterSocial = () => {
    return (
        <>
            <div className='w-full bg-qatar_light p-[15px]'>
                <div className='flex justify-between gap-[40px] max-mdl:flex-col'>
                    <div className='w-full lgl:w-[38%]'>
                        <p className='text-[18px] font-semibold text-boldtext'>Subscribe for our news and updates</p>
                        <div className='flex justify-start items-center gap-4 pt-2 max-mdl:flex-col'>
                            <input
                                className='p-[11px] w-full lgl:w-[45%] placeholder-black placeholder:text-sm'
                                type="email"
                                name=""
                                placeholder='Email'
                            />
                            <Link href=''
                                className='w-full lgl:w-[150px] text-center py-[13px] bg-qatar_pink text-white text-sm font-semibold'
                            >Subscribe</Link>
                        </div>
                    </div>
                    <div className='w-full lgl:w-[55%]'>
                        <div className='flex gap-[70px] max-mdl:flex-col max-mdl:gap-[20px]'>
                            <div className=''>
                                <p className='text-[18px] font-semibold text-boldtext'>Follow Qatar Living</p>
                                <div className='flex items-center gap-3 mt-2'>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <AiOutlineInstagram />
                                    </Link>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <BiLogoFacebook />
                                    </Link>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <AiOutlineTwitter />
                                    </Link>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <AiFillYoutube />
                                    </Link>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <GrLinkedinOption />
                                    </Link>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <BsTiktok />
                                    </Link>
                                    <Link href='' className='bg-qatar_body hover:bg-qatar_pink w-[30px] h-[30px] flex justify-center items-center hover:text-white text-lg'>
                                        <BiLogoSnapchat />
                                    </Link>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-[18px] font-semibold text-boldtext'>Qatar Living Classifieds App</p>
                                <div className='flex gap-1 mt-2'>
                                    <Link href=''>
                                        <Image src={applestore} alt='applestore' className='w-[125px] h-[40px]'/>
                                    </Link>
                                    <Link href=''>
                                        <Image src={googlestore} alt='googlestore' className='w-[125px] h-[40px]'/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFooterSocial