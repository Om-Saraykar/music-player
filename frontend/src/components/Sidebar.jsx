import React from 'react'
import assets from './../assets/frontend-assets/assets'


const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 text-white hidden lg:flex flex-col gap-2'>
        
        <div className='h-[15%] bg-[#121212] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="home_icon" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="home_icon" />
                <p className='font-bold'>Search</p>
            </div>
        </div>

        <div className='h-[85%] bg-[#121212] rounded'>
            <div className='flex p-4 items-center justify-between'>
                <div className='flex items-center gap-3 pl-2.5'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold cursor-pointer'>Your Library</p>
                </div>
                <div className='flex items-center gap-6 pr-3'>
                <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="" />
                    <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
                </div>
            </div>
            <div className='bg-[#242424] rounded p-4 m-2 flex flex-col items-start gap-1 font-semibold'>
                <h1>Create your first playlist</h1>
                <p className='font-light'>it's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='bg-[#242424] rounded p-4 m-2 flex flex-col items-start gap-1 font-semibold'>
                <h1>Let's find some podcast to follow</h1>
                <p className='font-light'>we'll keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4'>Browse Podcasts</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
