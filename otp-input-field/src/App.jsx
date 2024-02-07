import { RecaptchaVerifier, getAuth, onAuthStateChanged, signInWithPhoneNumber, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import Login from './components/Login';
import Otp from './components/Otp';
import Welcome from './components/Welcome';
import { auth } from './configs/firebase.config.js';

const App = () => {
    const [showOtp, setShowOtp] = useState(false);
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        // Check if the user is already authenticated (Firebase onAuthStateChanged)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, []);

    const onCaptchVerify = () => {
        // Check if recaptchaVerifier is not already defined on the window object
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'invisible',
                callback: (response) => {
                    //onSignup();
                },
                'expired-callback': () => {
                    // Handle expired callback if needed
                },
            });
        }
    };

    const onSignout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null);
            setShowOtp(false);
        }).catch((error) => {
            console.error('Error signing out:', error);
        });
    }

    const onSignup = async () => {
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        const formatPhone = '+' + phone;

        console.log(formatPhone);

        signInWithPhoneNumber(auth, formatPhone, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowOtp(true);
                toast.success('OTP was sent successfully!');
            })
            .catch((error) => {
                console.error("Firebase Authentication Error:", error);
                toast.error('Error sending OTP. Please try again.');
            });
    }


    const onOtpSubmit = (enteredOtp) => {
        window.confirmationResult.confirm(enteredOtp).then((res) => {
            console.log(res);
            setUser(res.user);
            toast.success('OTP verification successful!');
        }).catch(error => {
            console.log(error);
            toast.error('OTP verification failed. Please try again.');
        });
    }

    return (
        <section className='body flex flex-col items-center justify-center h-screen gap-5'>
            <h1 className='text-center leading-normal text-white font-bold text-3xl'>OTP Input Field Project</h1>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id='recaptcha-container'></div>
            {loading ? (
                <CgSpinner size={50} className='animate-spin' />
            ) : (
                <>
                    {user ? (
                        <Welcome onSignout={onSignout} />
                    ) : (
                        <>
                            {showOtp ? <Otp onOtpSubmit={onOtpSubmit} /> : <Login onSignup={onSignup} setPhone={setPhone} />}
                        </>
                    )}
                </>
            )}

        </section>
    );
};

export default App;
