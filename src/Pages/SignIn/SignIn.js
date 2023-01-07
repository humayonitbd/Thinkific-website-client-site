import { signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react'; 
import { toast } from 'react-hot-toast';
import { Form, Link, useNavigate } from 'react-router-dom';
import img from '../../assete/login-img/img.jpg';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignIn = () => {
    const {login, loginGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const loginHandler=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
            toast.success("Login successfull!!")
            navigate("/")
        })
        .catch(err =>toast.error(err.message))
        
    }

    const googleLoginHandler=()=>{
        loginGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user)
            toast.success("google logIn successfull!!!")
            navigate("/")
        })
        .catch(err =>console.log(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                    <img src={img} className='' alt="" />
                    <p className='text-center mt-5 font-semibold'>Are you new user? <Link to='/signUp' className='text-primary'>Sign Up</Link></p>
                    </div>
                    <div className="card ml-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={loginHandler} className="card-body">
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
                        <button type='submit' className="btn btn-primary">Login</button>
                        <button onClick={googleLoginHandler} className="btn btn-outline hover:bg-primary mt-3">Google Login</button>
                        </div>
                    </Form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SignIn;