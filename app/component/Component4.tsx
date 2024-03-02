import React from 'react'

const Component4 = () => {
  return (
    <div className='flex justify-evenly mt-20 gap-6'>
      <img src="feature.jpg" alt='...' className='w-2/5 h-2/5' />
      <div className='w-2/5 bg-white flex flex-col gap-6 rounded-xl  mb-20'>
        <p className='text-5xl font-bold mt-16 mx-16 '>How to create English subtitles for an French video?</p>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>1. Upload your file.</p>
          <p className='text-2xl'>With our uploader, you can import your file from anywhere, whether it's on your laptop, Google Drive, Youtube, or Dropbox.</p>
        </div>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>2. Select "French".</p>
          <p className='text-2xl'>Determine the language of the audio of your video.</p>
        </div>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>3. Select "Human made".</p>
          <p className='text-2xl'>With our Human-Made service, the original (French) subtitles will be created by a native subtitler and proofread by an experienced reviewer.</p>
        </div>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>4. Toggle "Translate subtitles to another language".</p>
          <p className='text-2xl'>Select "English" to determine the target language for the subtitle translation process.</p>
        </div>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>5. Get notified when your French and English subtitles are ready.</p>
          <p className='text-2xl'>Receive an email when the subtitles have been created within 24 hours for the French subtitles and 3-5 days for English subtitles.</p>
        </div>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>6. Receive your subtitles.</p>
          <p className='text-2xl'>Access your subtitles from the dashboard.</p>
        </div>
        <div className='mt-8 mx-16'>
          <p className='text-3xl font-bold'>7. Click on "Export" and choose your preferred file format.</p>
          <p className='text-2xl  mb-20'>You can export to SRT, VTT, and many more. It's that easy to have your video professionally subtitled!</p>
        </div>
      </div>
    </div>
  )
}

export default Component4