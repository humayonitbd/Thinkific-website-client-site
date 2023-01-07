import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import img from '../../assete/login-img/img.jpg';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const {user, createUser, profileUpdate} = useContext(AuthContext); 
    const navigate = useNavigate();
const handlerSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)

    if(password.length < 6){
       return toast.error('Your password must be 6 currencter!!')
    }

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        profileUpdate(name)
        .then(()=>console.log('name update'))
        .then((error)=>console.log(error.message))
        toast.success('Create Account Succesfull!!')
        form.reset();
        navigate("/")
    })
    .catch(err =>{
        toast.error(err.message)
    })

}
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <img src={img} className='rounded-xl' alt="" />
                <p className='text-center mt-5 font-semibold'>Have you account? <Link to='/signIn' className='text-primary'>Sign in</Link></p>
                </div>
                <div className="card ml-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <Form onSubmit={handlerSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name='name' placeholder="full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Sign Up</button>
                    </div>
                </Form>
                </div>
            </div>
            </div>
    </div>
    );
};

export default SignUp;