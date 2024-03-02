import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Winter from "../../public/winter.svg";
import Sring from "../../public/leader.svg"
import Image from 'next/image';
import { IoStar } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import Link from 'next/link';


const Component1 = () => {
    return (
        <div className='flex flex-col items-center mt-12 ml-8 mr-8'>
            <div className='flex justify-evenly'>
                <div className='flex flex-col'>
                    <img src="img1.jpg" alt=".." className='h-96 w-68' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center gap-4'>
                        <img src="france.png" alt="..." className='w-32 h-20 rounded-xl' />
                        <FaArrowRight className='text-4xl' />
                        <img src="america.png" alt="..." className='w-32 h-20 rounded-xl' />
                    </div>
                    <div className='flex flex-col items-center justify-center' >
                        <p className='text-7xl font-bold text-center mt-12'>French video with English <br />subtitles</p>
                        <p className='text-2xl text-center mx-auto mt-6'>Want your videos to reach a wider audience who speaks<br />  English? This service
                            is ideal for your audiovisual content - <br />from online videos, television shows, films, documentaries,<br />
                            marketing content and more!</p>
                    </div>
                    <button className='w-80 h-28 bg-blue-600 text-4xl text-white font-bold rounded-2xl mt-12 hover:bg-blue-700'>
                        <Link href="/submitpage">
                        Get Started
                        </Link>
                    </button>
                    <div className='flex items-center justify-center mt-8 gap-4'>
                        <Image src={Sring} alt="..." />
                        <Image src={Winter} alt="..." />
                    </div>
                    <div className='flex items-center gap-2 mt-16'>
                        <IoStar className='text-2xl text-yellow-400' />
                        <IoStar className='text-2xl text-yellow-400' />
                        <IoStar className='text-2xl text-yellow-400' />
                        <IoStar className='text-2xl text-yellow-400' />
                        <IoStarHalfSharp className='text-2xl text-yellow-400' />
                    </div>
                    <p className='text-xl text-gray-700 mt-8'>Rated <span className='font-bold'>4.8/5</span> based on 850+ reviews</p>
                    <p className='text-2xl mt-32'>Trusted by 100,000+ users and teams of all sizes.</p>
                    <div className='flex items-center gap-8 mt-12'>
                        <img src="bbc.jpg" alt="..." className='mix-blend-darken w-52 h-16' />
                        <img src="forbes.jpg" alt="..." className='mix-blend-darken w-52 h-16' />
                        <img src="spotify.jpg" alt="..." className='mix-blend-darken w-52 h-16' />
                        <img src="united.jpg" alt="..." className='mix-blend-darken w-52 h-16' />
                        <img src="apa.jpg" alt="..." className='mix-blend-darken w-52 h-16' />
                        <img src="rtc.jpg" alt="..." className='mix-blend-darken w-52 h-16' />
                    </div>
                </div>
                <div>
                    <img src="hell.jpg" alt="..." className='h-96 w-68' />
                </div>
            </div>
        </div>
    )
}

export default Component1