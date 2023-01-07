import React, { useEffect, useState } from 'react';

const LearningProducts = () => {
    const [learningCources, setLearningCources] = useState([]);
    useEffect(()=>{
        fetch('learningProducts.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setLearningCources(data)
        })

    },[])
    return (
        <div className='bg-[#ECEFF4]'>
            <div className=' w-11/12 mx-auto py-16'>
            <h3 className='text-[#1A365D]  text-2xl font-semibold '>MULTIPLE LEARNING PRODUCTS</h3>
            <h2 className='text-[#1A365D]  text-4xl font-bold my-8'>There’s more than one way to earn</h2>
            <p className='w-6/12 text-lg'>Discover the full power of multiple products working together. Or, keep it simple and pick the perfect product to get your business up and growing right away. The choice is yours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 my-10'>
            {
                learningCources?.map(learningCourse => <div key={learningCourse.id} className="card  bg-base-100 shadow-xl ">
                <figure><img src={learningCourse.img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{learningCourse.title}</h2>
                  <p>{learningCourse.details}</p>
                  
                </div>
              </div>)
            }
            </div>
            <div className='mt-20'>
                <h3 className='text-3xl font-bold '>Create, manage, and market your learning environment with advanced features like</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-5'>
                    <div>
                        <li>Custom web themes and domains</li>
                        <li>Quizzes and assingments</li>
                    </div>
                    <div>
                        <li>Deip scheduling</li>
                        <li>Community spaces and notifications</li>
                    </div>
                    <div>
                        <li>Live lessons and events</li>
                        <li>Bundles, coupons and cross-selling</li>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LearningProducts;