import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaFacebookMessenger } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
           <div className='bg-[#001526]'>
           <footer className="footer mx-auto py-24 w-10/12  text-neutral-content">
            <div>
                <span className="font-bold mb-7">Partners</span> 
                <Link className="link link-hover">Becoming a Partmer</Link>
                <Link className="link link-hover">Thhinkific App Store</Link>
                <Link className="link link-hover">Thinkific Developer</Link>
                <Link className="link link-hover">Become an Affilliate</Link>
            </div> 
            <div>
                <span className="font-bold mb-7">Product</span> 
                <Link className="link link-hover">Create Amazing Products </Link>
                <Link className="link link-hover">Build Websites to Market Your Busness</Link>
                <Link className="link link-hover">Generate Income By Selling</Link>
                <Link className="link link-hover">Grow and Scale Your Business</Link>
                <Link className="link link-hover">Pricing</Link>
            </div> 
            <div>
                <span className="font-bold mb-7">Company</span> 
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Careers</Link>
                <Link className="link link-hover">Contack Us</Link>
                <Link className="link link-hover">Security</Link>
                <Link className="link link-hover">Legal</Link>
                <Link className="link link-hover">Press</Link>
                <Link className="link link-hover">The Leap</Link>
            </div>
            <div>
                <span className="font-bold mb-7">Support</span> 
                <Link className="link link-hover">Resources Hub</Link>
                <Link className="link link-hover">Blog</Link>
                <Link className="link link-hover">FAQ</Link>
                <Link className="link link-hover">Help Center</Link>
                <Link className="link link-hover">Training site</Link>
                <Link className="link link-hover">Status</Link>
               
            </div>
            <div>
                <span className="font-bold mb-7">Customers</span> 
                <Link className="link link-hover">Customers</Link>
                <Link className="link link-hover">Case studies</Link>
                <Link className="link link-hover">Example websites</Link>
                
            </div>
            </footer>
           </div>
            <div className='bg-[#0D2131]'>
            <div className=' w-10/12 mx-auto py-8 text-white'>
                <div className='flex justify-between align-middle'>
                    <p>© Thinkific 2022</p>
                    <div className='flex'>
                        <FaFacebook  className='mr-5'/>
                        <FaTwitter className='mr-5' />
                        <FaInstagram className='mr-5' />
                        <FaFacebookMessenger className='mr-5' />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;