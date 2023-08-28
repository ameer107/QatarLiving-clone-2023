import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const SponserdPosts = () => {

    const [showrooms, setShowrooms] = useState([]);


    useEffect(() => {
        const fetchShowroomsData = async () => {
            try {
                const response = await fetch("https://www.qatarliving.com/q/api/get_queue.json?name=sponsored_posts");
                const get_data = await response.json();
                setShowrooms(get_data.data);
            } catch (error) {
                console.error("Error fetching vehicle data:", error);
            }
        };

        fetchShowroomsData();
    }, []);
    return (
        <>
            <h3 className='mb-[12px] text-lighttext text-[18px] tracking-wide'>
                Sponsored Posts
            </h3>
            {
                showrooms.map((items, index) => {
                    return (
                        <>
                            <div key={index} className='mb-[15px] mr-[15px]'>
                                <Link href={items.link}>
                                    <Image
                                        src={`https://files.qatarliving.com/${items.image.url}`}
                                        alt='sponserd posts'
                                        width={300}
                                        height={300}
                                        className='w-full h-full'
                                    />
                                </Link>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
