import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedVehicles = () => {

    const [vehicalData, setVehicalData] = useState([]);


    useEffect(() => {
        const fetchVehicalData = async () => {
            try {
                const response = await fetch("https://www.qatarliving.com/backend/api/featured-vehicles?feature=true&notSold=true");
                const data = await response.json();
                setVehicalData(data.vehicle);
            } catch (error) {
                console.error("Error fetching vehicle data:", error);
            }
        };

        fetchVehicalData();
    }, []);

    const latestAds = vehicalData.slice(0, 3);


    return (
        <>
            <h3 className='mb-[12px] text-lighttext text-[18px] tracking-wide'>Cars for sale in Qatar</h3>
            <div className='flex w-full lgl:justify-between lg:gap-5 mdl:gap-5'>
                {
                    latestAds.map((items, index) => {

                        return (
                            <>
                                <Link key={index} href={items._source.path} className='bg-white max-w-[280px] max-mdl:min-w-[100%]'>
                                    <div className='h-[186px] relative'>
                                        <Image
                                            src={`https://files.qatarliving.com/${items._source.image[0]}`}
                                            width={280}
                                            height={186}
                                            className='object-cover h-[186px]'
                                            alt='Vehicles Images'
                                        />
                                        {items._source.feature === true ? (
                                            <span className='bg-qatar_skyblue uppercase py-[7px] px-[6px] text-[8px] leading-[.6px] text-white absolute right-0 top-0'>featured</span>
                                        ) : null}


                                        {items._source.brand_new === true ? (
                                            <span className='bg-qatar_skyblue uppercase py-[7px] px-[6px] text-[8px] leading-[.6px] text-white absolute top-0 left-0'>Brand new</span>
                                        ) : null}
                                    </div>
                                    <div className='px-[10px] py-[15px]'>
                                        <p className='text-qatar_green leading-[.6px] opacity-[.7] uppercase text-[13px] mb-[15px] cursor-pointer'>
                                            <span>{items._source.vehicle_type.name}</span>
                                            ,
                                            <span>{items._source.location.name}</span>
                                        </p>
                                        <h3 className='text-[19px] text-lighttext font-medium mt-[5px] mb-[0.5rem] cursor-pointer'>
                                            {items._source.vehicle_title}
                                        </h3>
                                        <p className='mb-[15px] text-[#6a6a6a] text-[10px] leading-[14px] cursor-pointer'>
                                            {items._source.mileage} Km
                                        </p>
                                        <h3 className='cursor-pointer text-qatar_pink text-[18px] font-normal leading-[22px]'>
                                            {items._source.price} <span className='text-[8px]'>QAR</span>
                                        </h3>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FeaturedVehicles