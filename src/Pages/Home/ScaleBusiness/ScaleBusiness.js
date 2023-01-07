import React, { useEffect, useState } from 'react';

const ScaleBusiness = () => {
    const [scaleBusiness, setScaleBusiness] = useState([]);
    useEffect(()=>{
        fetch('ScaleBusiness.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setScaleBusiness(data)
        })

    },[])
    return (
        <div>
            <div className='bg-[#E1E6EF]'>
            <div className=' w-11/12 mx-auto py-16'>
            <h3 className='text-[#1A365D]  text-2xl font-semibold '>SCALE YOUR BUSINESS</h3>
            <h2 className='text-[#1A365D]  text-4xl font-bold my-8'>Grow without all the pains</h2>
            <p className='w-6/12 text-lg'>Leverage an online learning platform designed to never hold you back.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 my-10'>
            {
                scaleBusiness?.map(scalBusines => <div key={scalBusines.id} className={`card bg-[${scalBusines.bgColor}] shadow-xl text-white`}>
                <figure><img src={scalBusines.img} alt="Shoes" /></figure>
                <div className={`card-body`} >
                  <h2 className="card-title">{scalBusines.title}</h2>
                  <p>{scalBusines.details}</p>
                  <a target="_blank" className='font-bold text-start mt-4 border-2 p-2 rounded text-white' href={scalBusines.link}>{scalBusines.linkTitle}</a>
                  
                </div>
              </div>)
            }
            </div>
            
        </div>
        </div>
        </div>
    );
};

export default ScaleBusiness;