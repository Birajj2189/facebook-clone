import React from 'react'
import {
  GlobeAltIcon  ,
  ChatBubbleBottomCenterIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/outline'
import { 
  HeartIcon,
  HandThumbUpIcon  
} from '@heroicons/react/20/solid'
import Post from './Post'

const feeds = [
  {id:1,name : 'Biraj Mahanta', href:'#', image:'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600', post:'https://images.pexels.com/photos/15001763/pexels-photo-15001763/free-photo-of-view-of-a-tower-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:2,name : 'Simar Kaur', href:'#', image:'https://images.pexels.com/photos/18675712/pexels-photo-18675712/free-photo-of-a-woman-in-a-green-top-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',post:'https://images.pexels.com/photos/18676286/pexels-photo-18676286/free-photo-of-guitar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:3,name : 'Deepraj Das', href:'#', image:'https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/5602975/pexels-photo-5602975.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:4,name : 'Nabarun Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18031817/pexels-photo-18031817/free-photo-of-pouring-drink-to-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:5,name : 'Aryan Kumar', href:'#', image:'https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18799882/pexels-photo-18799882/free-photo-of-palm-trees-line-the-beach-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:6,name : 'Sowmick Deb', href:'#', image:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/9330333/pexels-photo-9330333.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:7,name : 'Sarad Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18617044/pexels-photo-18617044/free-photo-of-woman-hands-pouring-tea-to-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {id:8,name : 'Kunal Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18772233/pexels-photo-18772233/free-photo-of-boat-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
]

const Middle = () => {
  return (
    <div className=' w-6/12 bg-gray-100 overflow-y-scroll'>

      <div className='p-2 m-2 rounded border shadow-md bg-white'>
        <div className='flex w-full'>
          <img className="mx-2 h-12 w-12 rounded-[50%] border" src="https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <input className='bg-gray-200 w-full rounded-3xl px-4 focus:border-lightblue' placeholder="What's in your mind Biraj ?"/>
        </div>
        <hr className='my-4'/>
        <div className='flex justify-evenly'>
          <div className='p-2 flex w-48 mx-auto rounded-3xl hover:bg-gray-200'>
            <img height="24" width="24" alt="" className="xz74otr mx-2" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png"/>
            Live Video
          </div>
          <div className='p-2 flex mx-auto w-48 rounded-3xl hover:bg-gray-200'>
            <img height="24" width="24" alt="" className="xz74otr mx-2" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"/>            
            Photo/Video
          </div>
          <div className='p-2  flex w-48 mx-auto rounded-3xl hover:bg-gray-200'>
            <img height="24" width="24" alt="" className="mx-2 xz74otr" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"/>            
            Feeling/Activity
          </div>
        </div>
        <hr className='my-4'/>
        <div className='w-full flex justify-end items-end'>
        <button className=" w-1/3 font-semibold text-white bg-[#36a420] border-0 py-2 px-6 focus:outline-none hover:bg-[#36a420] rounded-3xl text-lg">Share</button>
        </div>

      </div>
      {
        feeds.map((items)=>(
          <Post key={items.id} post={item}/>
        ))
      }


    </div>
  )
}

export default Middle