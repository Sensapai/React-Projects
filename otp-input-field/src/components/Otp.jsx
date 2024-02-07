import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import OtpInput from 'react-otp-input';

const Otp = ({ onOtpSubmit }) => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!otp) {
            setLoading(false);
            return;
        }
        await onOtpSubmit(otp);
    };

    return (
        <section className='otp flex-col flex items-center justify-center rounded-lg py-16 px-5 gap-10 w-full'>
            <h2 className='text-center text-white font-bold text-3xl'>Enter verification code</h2>
            <form onSubmit={handleOtpSubmit}>
                <div className='flex flex-col gap-5'>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        containerStyle={"otp-container"}
                        inputStyle={"otp-input"}
                        shouldAutoFocus={true}
                        renderInput={(props) => <input {...props} />}
                    />
                    <button type="submit" className='bg-white font-semibold rounded-md p-2 gap-1 justify-center flex items-center'>
                        {loading && <CgSpinner size={20} className='mt-1 animate-spin' />} <span>Verify</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Otp;
