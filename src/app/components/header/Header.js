import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi'
import QatarLogo from '../../../../public/images/header/qatarliving_logo_white.png'
const Header = () => {
    return (
        <>
            <div className='flex gap-8 w-full max-h-[90px] lg:bg-qatar_light'>
                <div className='w-[100%] lg:w-[26%] bg-qatar_pink max-lg:flex justify-start items-center gap-2 max-lg:pl-2'>
                    <Link href='' className='hidden max-lg:block cursor-pointer'>
                        <FiMenu className='w-[28px] h-[40px] text-white' />
                    </Link>
                    <Link href='/' className='cursor-pointer'>
                        <Image
                            className='max-lg:w-[70px] max-lg:h-[32px] w-[166px] h-[65px] my-[13px] max-lg:mx-2 lg:mx-auto max-w-[166px]'
                            src={QatarLogo}
                            alt='QatarLogo'
                        />
                    </Link>
                </div>
                <div className='w-[74%] h-auto max-h-[90px] hidden lg:block'>
                    <div className='max-w-[728px] flex justify-center items-center h-[100%] border border-qatar_orange'>
                        Add Box
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header