import React from 'react';
import experticeImg from '../../../assete/image/img10.png';
import experticeImg1 from '../../../assete/image/img11.png';
import experticeImg12 from '../../../assete/image/img12.png';
import { FaArrowRight } from "react-icons/fa";

const MarketSellExpertice = () => {
    return (
        <div className='bg-[#F4F6FA]'>
            <div className=' w-11/12 mx-auto py-20'>
            <h3 className='text-[#1A365D]  text-2xl font-semibold '>MARKET & SELL YOUR EXPERTISE</h3>
            <h2 className='text-[#1A365D]  text-4xl font-bold my-8'>Build your knowledge business your way</h2>
            <p className='w-6/12 text-lg'>Sell your expertise online in the way that works best for your business. You control the pricing and keep all of your revenue — with no hidden fees.</p>
            <div className='md:flex justify-between items-center my-10'>
            <div className='md:w-6/12'>
                <div>
                    <img src={experticeImg} alt="" />
                </div>
            </div>
            <div className='md:w-6/12'>
                <div>
                    <h3 className='text-3xl font-bold '>Customize every touchpoint</h3>
                    <p className='my-10 text-lg'>You own the entire experience across your learning products and sales pages to convert the curious into customers. With control over your pricing, revenue, learning product data, and the look and feel of your content, your branded expertise is put front and center.</p>
                    <button className='btn bg-[#1A365D] hover:bg-[#FFD086] hover:border-none'><a target="_blank" href="https://courses.thinkific.com/onboarding/steps/account">GET STARTED FREE <FaArrowRight className='inline ml-3'/></a> </button>
                </div>
            </div>
            </div>
            <div className='md:flex justify-between items-center my-10'>
            <div className='md:w-6/12 pr-10'>
                <div>
                    <h3 className='text-3xl font-bold '>Integrate with trusted tools</h3>
                    <p className='my-10 text-lg'>The Thinkific App Store makes it simple to sync with the learning and marketing tools you already know and trust to create an even more powerful business.</p>
                    <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-14'>
                    <div>
                        <li>Automate emails</li>
                        <li>Create custom coupons</li>
                        <li>Convert leads</li>
                    </div>
                    <div>
                        <li>Create promotional bundles</li>
                        <li>Leverage customer success</li>
                        <li>And more!</li>
                    </div>
                    
                </div>
            </div>
                    <button className=' text-[#1A365D] font-bold mb-5'><a target="_blank" href="https://apps.thinkific.com/">LAUNCH THINKIFIC APP STORE <FaArrowRight className='inline ml-3 '/></a></button>
                </div>
            </div>
            <div className='md:w-6/12'>
            <div className='flex justify-end'>
                <img src={experticeImg1} alt="" />
            </div>
            </div>
            </div>

            <div className='md:flex justify-between items-center my-10'>
            <div className='md:w-6/12'>
                <div>
                    <img src={experticeImg12} alt="" />
                </div>
            </div>
            <div className='md:w-6/12'>
                <div className='pl-10'>
                    <h3 className='text-3xl font-bold '>Learn from detailed analytics</h3>
                    <p className='my-10 text-lg'>Through a deeper understanding of your students’ behavior and interests you can fine-tune your content, optimize the user experience, and focus your marketing efforts to maximize your impact in less time.</p>
                    <button className=' text-[#1A365D] font-bold'><a target="_blank" href="https://www.thinkific.com/features/">LEARN ABOUT OUR FEATURES <FaArrowRight className='inline ml-3'/></a> </button>
                </div>
            </div>
            </div>
           
        </div>
        </div>
    );
};

export default MarketSellExpertice;