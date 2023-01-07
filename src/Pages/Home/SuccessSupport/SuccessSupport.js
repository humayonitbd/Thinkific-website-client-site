import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SuccessSupport = () => {
    const [successSupport, setSuccessSupport] = useState([]);
    useEffect(()=>{
        fetch('SuccessSupport.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setSuccessSupport(data)
        })

    },[])
    return (
        <div>
            <div className='bg-[#ECEFF4]'>
            <div className=' w-11/12 mx-auto py-16'>
            <h3 className='text-[#1A365D]  text-2xl font-semibold '>SUCCEED WITH SUPPORT</h3>
            <h2 className='text-[#1A365D]  text-4xl font-bold my-8'>Get help how and when you need it</h2>
            <p className='w-6/12 text-lg'>We know how it feels when you’re just getting started. With our support team, a robust creator community and a knowledge base of articles and tutorials, you are never alone.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 my-10'>
            {
                successSupport?.map(succesSuport => <div key={succesSuport.id} className="card">
                <figure><img src={succesSuport.img} alt="Shoes" /></figure>
                <div className="card-body p-0">
                  <h2 className="card-title mt-8">{succesSuport.title}</h2>
                  <p>{succesSuport.details}</p>
                  <a target="_blank" className='text-[#1A365D] font-bold text-start mt-4' href={succesSuport.link}>{succesSuport.linkTitle} <FaArrowRight className='inline ml-3'/></a>
                  
                </div>
              </div>)
            }
            </div>
            
        </div>
        </div>
        </div>
    );
};

export default SuccessSupport;