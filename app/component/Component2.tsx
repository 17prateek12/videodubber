import React from 'react';

const Component2 = () => {
    return (
        <div className='flex flex-col mt-32 items-center'>
            <p className='text-5xl font-bold'>How Does it work?</p>
            <div className='flex items-center mt-12 gap-16'>
                <div className='w-96 h-60 bg-white rounded-xl border-2 border-gray-400'>
                    <div className='flex items-center mt-6 ml-6'>
                        <div className='w-8 h-12 rounded-xl bg-red-300 flex items-center justify-center text-xl text-white font-bold'>1</div>
                        <p className='font-bold text-2xl ml-4'>Upload.</p>
                    </div>
                    <p className='text-xl mt-8 mx-6'>Upload your French videos, your URLs, or pull from Youtube, Vimeo, Drive, and more.</p>
                </div>
                <div className='w-96 h-60 bg-white rounded-xl border-2 border-gray-400'>
                    <div className='flex items-center mt-6 ml-6'>
                        <div className='w-8 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-xl text-white font-bold'>2</div>
                        <p className='font-bold text-2xl ml-4'>Create & Translate.</p>
                    </div>
                    <p className='text-xl mt-8 mx-6'>A subtitler will create the original (French) subtitles. A English
                        subtitle translator will translate the subtitles.</p>
                </div>
                <div className='w-96 h-60 bg-white rounded-xl border-2 border-gray-400'>
                    <div className='flex items-center mt-6 ml-6'>
                        <div className='w-8 h-12 rounded-xl bg-blue-700 flex items-center justify-center text-xl text-white font-bold'>3</div>
                        <p className='font-bold text-2xl ml-4'>Download.</p>
                    </div>
                    <p className='text-xl mt-8 mx-6'>Your file will appear on your dashboard with the perfect English subtitles.</p>
                </div>
            </div>
            <p className='text-5xl mt-28 mb-16 font-bold'>Features</p>
            <div>
                <img src="feature.jpg" alt="..." />
            </div>
        </div>
    )
}

export default Component2