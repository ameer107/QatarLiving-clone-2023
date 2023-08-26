import { useState, useEffect } from 'react';
import Image from 'next/image';

const VehicalsListing = () => {
    const [vehicalData, setVehicalData] = useState([]);

    useEffect(() => {
        const fetchVehicalData = async () => {
            try {
                const response = await fetch("https://www.qatarliving.com/backend/api/vehicles");
                const data = await response.json();
                setVehicalData(data.vehicle);
            } catch (error) {
                console.error("Error fetching vehicle data:", error);
            }
        };

        fetchVehicalData();
    }, []);

    console.log(vehicalData);

    return (
        <>

            <div>
                <div className='flex'>
                    <div className='w-[25%] max-lg:hidden'>
                        <h3>Sponsored Posts</h3>
                    </div>
                    <div className='w-[75%] max-lg:w-[100%]'>
                        <div className='px-[15px] max-lg:hidden'>
                            <h3>Cars for sale in Qatar</h3>
                            <div></div>
                        </div>
                        <div className='flex'>
                            <div className='w-[100%] px-[15px]'>
                                <h3>Ads Found</h3>
                                {
                                    vehicalData.map((items, index) => {
                                        return (
                                            <div key={index} className='flex gap-2 h-[167.5px] w-[100%] mb-[15px] bg-white relative'>
                                                <div className='max-sml:w-[45%] w-[35%]'>
                                                    <Image
                                                        src={`https://files.qatarliving.com/${items._source.image[0]}`}
                                                        width={230}
                                                        height={167.5}
                                                        className='h-[100%] object-cover max-mdl:min-w-full'
                                                    />
                                                </div>
                                                <div className='mr-20px pt-[15px] max-sml:w-[55%] w-[65%] pl-[5px] relative'>
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
                                                    <h3 className='cursor-pointer text-qatar_pink text-[20px] font-normal leading-[22px] absolute bottom-[20px]'>
                                                        {items._source.price} <span className='text-[9px]'>QAR</span>
                                                    </h3>
                                                </div>
                                                    <div className='absolute bottom-[15px] right-[10px] flex flex-col justify-end items-end max-w-[139.6px] max-h-[86px] mr-[0px] max-mdl:hidden'>
                                                        {items._source.author.user_profile && (
                                                            <div className='mt-[12px] w-[60px] h-[60px]'>
                                                            <Image
                                                                src={`https://files.qatarliving.com/${items._source.author.user_profile}`}
                                                                width={50}
                                                                height={50}
                                                                className='h-[50px] border-0 rounded-[50%] float-right'
                                                            />
                                                            </div>
                                                        )}
                                                        <p className='text-[#999] text-[10px] h-[26px] flex items-end'>
                                                           by {items._source.author.username}
                                                        </p>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className='w-[33.3333333333%] px-[15px] max-lg:hidden'>
                                <h3>Sponsored Cars</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehicalsListing