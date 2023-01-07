import React, { useEffect, useState } from 'react';

const SuccessStory = () => {
    const [successfullStory, setSuccessfullStory] = useState([]);
    useEffect(()=>{
        fetch('SuccessStory.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setSuccessfullStory(data)
        })

    },[])
    return (
        <div>
            <div className='bg-[#F4F6FA]'>
            <div className=' w-11/12 mx-auto py-16'>
            <h3 className='text-[#1A365D]  text-2xl font-semibold '>REAL SUCCESS STORIES</h3>
            <h2 className='text-[#1A365D]  text-4xl font-bold my-8'>All kinds of creators earn with Thinkific</h2>
            <p className='w-6/12 text-lg'>Join more than 50,000 successful Thinkific Course creators and businesses.</p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-10'>
            {
                successfullStory?.map(successStrory => <div key={successStrory.id} className="">
                <figure><img className='rounded-tl-2xl rounded-br-2xl rounded-bl-2xl h-80 w-full' src={successStrory.img} alt="Shoes" /></figure>
                <div className="card-body p-0">
                  <h2 className="card-title mt-8">{successStrory.name}</h2>
                  <p>{successStrory.title}</p>
                  <p>{successStrory.details}</p>
                </div>
              </div>)
            }
            </div>
            
        </div>
        </div>
        </div>
    );
};

export default SuccessStory;