import React from 'react';
import Link from 'next/link';

const Component3 = () => {
  return (
    <div className='flex mt-28 flex-col gap-20'>
        <div className='flex justify-evenly items-center'>
            <div>
                <p className='text-7xl font-bold'>100% Human <br />Translation<br /> Customization</p>
                <p className='text-3xl mt-12'>All your translations are done by one of our <br />
                French to English subtitle translators to ensure <br /> 
                the absolute highest quality. No machines are <br />
                used here, just the talents and abilities of our <br /> translators.</p>
            </div>
            <img src="pic1.jpg" alt="..."  className='w-2/5 h-2/5'/>
        </div>
        <div className='flex justify-evenly items-center'>
            <img src="pic2.jpg" alt="..."  className='w-2/5 h-2/5'/>
            <div>
                <p className='text-7xl font-bold'>Format & Hardcode <br /> Subtitles</p>
                <p className='text-3xl mt-12'>Once your subtitles have been translated, you <br /> 
                can format your subtitles to make them match <br /> 
                your brand. You can select multiple settings and <br /> get your video ready to publish. You can also <br /> 
                directly download the video with burned-in <br /> subtitles.</p>
            </div>
        </div>
        <div className='flex justify-evenly items-center'>
            <div>
                <p className='text-7xl font-bold'>Subtitle Customization</p>
                <p className='text-3xl mt-12'>Our translation experts take care of the <br />
                 translation and making sure that your subtitles <br />
                  look pretty. But even then you can still decide <br /> how your subtitles are going to look with our line,<br />
                   CPL, and CPS management.</p>
            </div>
            <img src="pic3.jpg" alt="..."  className='w-2/5 h-2/5'/>
        </div>
        <button className='w-80 h-28 bg-blue-600 text-4xl text-white font-bold rounded-2xl mt-12 hover:bg-blue-700 block mx-auto'>
                        <Link href="/submitpage">
                        Get Started
                        </Link>
        </button>
    </div>
  )
}

export default Component3