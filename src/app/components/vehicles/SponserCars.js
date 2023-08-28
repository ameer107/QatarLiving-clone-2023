import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SponserCars = () => {

    const [sponserCars, setSponserCars] = useState([]);


    useEffect(() => {
        const fetchSponserCarsData = async () => {
            try {
                const response = await fetch("https://www.qatarliving.com/q/api/get_queue.json?name=sponsored_cars");
                const getCars = await response.json();
                setSponserCars(getCars.data);
            } catch (error) {
                console.error("Error fetching vehicle data:", error);
            }
        };

        fetchSponserCarsData();
    }, []);

    return (
        <>
            <h3 className='mb-[12px] text-lighttext text-[18px] tracking-wide text-center'>
                Sponsored Posts
            </h3>
            <div className='flex flex-col justify-center items-center'>
                {
                    sponserCars.map((items, index) => {

                        return (
                            <>
                                <div className='mb-[10px] w-[220px] h-[164.5px]'>
                                    <Link href={items.path} className='relative'>
                                        <Image
                                            src={`https://files.qatarliving.com/${items.image.url}`}
                                            width={220}
                                            height={164.5}
                                            alt='sponser cars'
                                            className='w-full h-full object-cover'
                                        />

                                        <span className='bg-qatar_pink uppercase pt-[12px] pb-[6px] px-[10px] text-[12px] font-medium leading-[.6px] text-white absolute left-0 top-0'>{items.price} <span className='text-[7px]'>QAR</span></span>
                                        <span className='bg-[#4e4e4c] uppercase pt-[12px] pb-[6px] px-[10px] text-[12px] font-medium leading-[.6px] text-white absolute top-0 right-0'>{items.mileage} <span className='text-[7px] capitalize'>Km</span></span>

                                    </Link>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SponserCars