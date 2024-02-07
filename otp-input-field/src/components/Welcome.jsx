import React from 'react';
import { CgSmile } from 'react-icons/cg';

const Welcome = ({ onSignout }) => {
    return (
        <section className='flex-col flex items-center justify-center rounded-lg py-16 px-5 gap-10 w-full'>
            <div className='text-white font-semibold text-3xl flex items-center'>Welcome! <CgSmile /> </div>
            <button className='text-white font-semibold text-2xl border rounded-md p-2' onClick={onSignout}>Sing out</button>
        </section>
    )
}

export default Welcome