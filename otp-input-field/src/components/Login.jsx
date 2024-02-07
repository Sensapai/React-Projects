import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Login = ({ onSignup, setPhone }) => {
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        await onSignup();
        setLoading(false);
    };

    return (
        <section className='login flex-col flex items-center justify-center rounded-lg py-16 px-5 gap-10 w-full'>
            <h2 className='text-center text-white font-bold text-3xl'>Login with phone number</h2>
            <form onSubmit={handleSignup}>
                <div className='flex flex-col gap-5'>
                    <PhoneInput country={"ee"} value={''} onChange={(phone) => setPhone(phone)} />
                    <button type="submit" className='bg-white font-semibold rounded-md p-2 gap-1 justify-center flex items-center'>
                        {loading && <CgSpinner size={20} className='mt-1 animate-spin' />} <span>Enter</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;
