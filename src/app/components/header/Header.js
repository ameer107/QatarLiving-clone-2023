import Link from 'next/link';
import Image from 'next/image';
import QatarLogo from '../../../../public/images/header/qatarliving_logo_white.png'


const Header = () => {

 
    return (
        <>
            <div className='max-lg:hidden flex gap-8 w-full max-h-[90px] lg:bg-qatar_light max-mdl:fixed z-10'>
                <div className='w-[100%] lg:w-[26%] bg-qatar_pink max-lg:flex justify-start items-center gap-2 max-lg:pl-2'>
                    <Link href='/' className='cursor-pointer'>
                        <Image
                            className='w-[166px] h-[65px] my-[13px] max-lg:mx-2 lg:mx-auto max-w-[166px]'
                            src={QatarLogo}
                            alt='QatarLogo'
                        />
                    </Link>
                    <span className='hidden max-mdl:block w-full text-right mr-5'>
                        <Link href='' className='px-3 bg-[#D33C57] text-white text-3xl'>
                            +
                        </Link>
                    </span>
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