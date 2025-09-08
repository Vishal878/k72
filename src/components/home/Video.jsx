import React from 'react'

const Video = () => {
  return (
    <div className='h-full width-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted playsInline src="./Videos/bg.mp4"></video>
     </div>
  )
}

export default Video
