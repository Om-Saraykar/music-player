import React from 'react'
import { songsData } from './../assets/frontend-assets/assets'
import { assets } from './../assets/frontend-assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex items-center justify-center lg:justify-between text-white px-4'>

      <div className='w-[240px] hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt="" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-5'>
            <p>1:06</p>
            <div className='h-1 w-[70vw] lg:w-[35vw] lg:max-w[500px] bg-gray-300 rounded-full cursor-pointer'>
                <hr className='h-1 w-[35%] border-none bg-green-800 rounded-full'/>
            </div>
            <p>3:36</p>
        </div>
      </div>

      <div className='h-10 hidden lg:flex items-center justify-end gap-3 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="" />
        <img className='w-4' src={assets.mic_icon} alt="" />
        <img className='w-4' src={assets.queue_icon} alt="" />
        <img className='w-4' src={assets.speaker_icon} alt="" />
        <div className='flex items-center gap-1'>
            <img className='w-4' src={assets.volume_icon} alt="" />
            <hr className='h-1 w-20 border-none rounded-full bg-slate-50 '/>
        </div>
        <img className='w-4' src={assets.zoom_icon} alt="" />
      </div>
      
    </div>
  )
}

export default Player
