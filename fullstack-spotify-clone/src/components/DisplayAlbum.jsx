import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import assets, { albumsData, songsData } from '../assets/frontend-assets/assets'

const DisplayAlbum = () => {

    const {id} = useParams()
    console.log(id)
    const albumData = albumsData[id]

    return (
        <>
            <Navbar/>

            <div className='mt-10 flex flex-col lg:flex-row lg:items-end gap-x-8'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='font-bold mb-4 text-5xl md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1 flex gap-2 items-center'>
                        <img className='w-5 h-5' src={assets.spotify_logo} alt="" />
                        <b>Spotify •</b>
                        <p className='hidden sm:flex'>1,324,674 likes •</p>
                        <b>50 songs</b>
                        about 2hr 30 min
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b>#</b>Title</p>
                <p className='text-center hidden md:block'>Album</p>
                <p className='hidden lg:block'>Date Added</p>
                <img className='w-4 m-auto ' src={assets.clock_icon} alt="" />
            </div>

            <hr />

            {
                songsData.map((item, index)=>(
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mb-4 pl-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26]'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                            <img className='w-10 inline mr-5' src={item.image} alt="" />
                            {item.name.slice(0,10)}
                        </p>
                        <p className='text-[15px] text-center hidden md:block'>{albumData.name}</p>
                        <p className='text-[15px] hidden lg:block'>5 days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }

        </>
    )
}

export default DisplayAlbum
