import React from 'react';
import img06 from '../../../assete/image/img06.jfif'
import img01 from '../../../assete/image/img01.png'
import img02 from '../../../assete/image/img02.png'
import img03 from '../../../assete/image/img03.png'
import img04 from '../../../assete/image/img04.png'
import img05 from '../../../assete/image/img05.png'

const HomeBanner = () => {
    return (
        <div className='bg-[#F4F6FA]'>
           <div className="hero w-11/12 mx-auto py-20 ">
            <div className="md:flex justify-between items-center">
                <div className='md:w-6/12 pr-10'>
                <h1 className="text-5xl text-[#1A365D] font-bold">Turning your expertise into revenue just got a lot easier.</h1>
                <p className="py-6 text-[#1A365D] ">Create and sell online courses, build vibrant communities, and monetize memberships — all on a single, scalable platform.</p>
                <button className="btn bg-[#1A365D] px-10">Get Started free</button>
                <p className='mt-16 mb-5'>TRUSTED BY:</p>
                <div className='flex md:mb-0 mb-5 justify-between'>
                    <img src={img01} alt="" />
                    <img src={img02} alt="" />
                    <img src={img03} alt="" />
                    <img src={img04} alt="" />
                    <img src={img05} alt="" />
                </div>
                </div>
                <div className='md:w-6/12 pl-10'>
                <img src={img06} className="rounded-3xl   " alt=''/>
                <h4 className='font-semibold mt-5'>Ellie Diop</h4>
                <p>Business Strategy Coach for Women & Entrepreneurs</p>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default HomeBanner;