import React from 'react'
import Navbar from './Navbar'
import {
  MagnifyingGlassCircleIcon
} from '@heroicons/react/24/outline'
import {
  GlobeAltIcon  ,
  ChatBubbleBottomCenterIcon,
  ArrowUturnRightIcon,
} from '@heroicons/react/24/outline'
import { 
  HeartIcon,
  HandThumbUpIcon  
} from '@heroicons/react/20/solid'

const feeds = [
  {name : 'Biraj Mahanta', href:'#', image:'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600', post:'https://images.pexels.com/photos/15001763/pexels-photo-15001763/free-photo-of-view-of-a-tower-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Simar Kaur', href:'#', image:'https://images.pexels.com/photos/18675712/pexels-photo-18675712/free-photo-of-a-woman-in-a-green-top-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',post:'https://images.pexels.com/photos/18676286/pexels-photo-18676286/free-photo-of-guitar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Deepraj Das', href:'#', image:'https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/5602975/pexels-photo-5602975.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Nabarun Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18031817/pexels-photo-18031817/free-photo-of-pouring-drink-to-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Aryan Kumar', href:'#', image:'https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18799882/pexels-photo-18799882/free-photo-of-palm-trees-line-the-beach-in-front-of-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Sowmick Deb', href:'#', image:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/9330333/pexels-photo-9330333.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Sarad Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18617044/pexels-photo-18617044/free-photo-of-woman-hands-pouring-tea-to-glass.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
  {name : 'Kunal Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',post:'https://images.pexels.com/photos/18772233/pexels-photo-18772233/free-photo-of-boat-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',caption:'new look'},
] 


const leftcomp = [
  {name : 'Biraj Mahanta', href:'#', class:`bg-[url('https://www.facebook.com/photo/?fbid=1324187238430129&amp;set=a.105447676970764')] bg-[0_-304px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2 `},
  {name : 'Friends', href:'#', class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-304px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Events', href:'#', class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/vWSUA-u7jLw.png')] bg-[0_-38px] [background-size:38px_76px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Saved', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0px_-456px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Groups', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-190px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Videos', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-38px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Marketplace', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-532px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Feeds', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-418px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
] 

const contacts = [
  {name : 'Biraj Mahanta', href:'#', image:'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Simar Kaur', href:'#', image:'https://images.pexels.com/photos/18675712/pexels-photo-18675712/free-photo-of-a-woman-in-a-green-top-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'},
  {name : 'Deepraj Das', href:'#', image:'https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Nabarun Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Aryan Kumar', href:'#', image:'https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Sowmick Deb', href:'#', image:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Sarad Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Kunal Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Aishik Kumar', href:'#', image:'https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Debanjan Deb', href:'#', image:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Bedanta Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Sarad Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Kunal Paul', href:'#', image:'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Aishik Kumar', href:'#', image:'https://images.pexels.com/photos/1766702/pexels-photo-1766702.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Debanjan Deb', href:'#', image:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Bedanta Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600'},
] 
const friendreqst = [
  {name : 'Biraj Mahanta', href:'#', image:'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Debanjan Deb', href:'#', image:'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {name : 'Bedanta Neog', href:'#', image:'https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=600'},
] 


const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='sm:px-4 md:px-36 w-[100vw]'>
        <img className="rounded-b-3xl w-full h-[60vh] object-cover" src='https://images.pexels.com/photos/18772233/pexels-photo-18772233/free-photo-of-boat-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
      <div>
      <div className='w-full flex '>
        <div className='flex ml-10 relative bottom-10 justify-center items-center p-1 h-44 w-56  bg-white rounded-[50%]'>
          <img className="  w-[100%] h-[100%] rounded-[50%]" src='https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </div>
        <div className='flex-col p-6 text-left w-full'>
          <div className='text-4xl p-1'>
            Biraj Mahanta
          </div>
          <div className='text-md p-1'>
            255 friends
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className='flex border-2 border-t bg-gray-200 h-96 shadow'>

      {/* Left component */}
      <div className='w-3/12 bg-gray-100 overflow-y-scroll'>
      {leftcomp.map((item) => (
        <div className='h-16 p-2 flex justify-start items-center hover:bg-gray-200 rounded'>
          <i className={item.class}/>
          <span className='font-semibold '>{item.name}</span>
        </div>
      ))}

      <div className='h-16 p-2 flex justify-start items-center hover:bg-gray-200 rounded'>
        <img draggable="false" height="36" width="36" alt="" className="m-2" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png"/>
        <span className='font-semibold '>Feeds</span>
      </div>

      <div className='h-16 p-2 flex justify-start items-center hover:bg-gray-200 rounded'>
        <img draggable="false" height="36" width="36" alt="" className="m-2" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png"/>
        <span className='font-semibold '>Favourites</span>
      </div>
    </div>

{/* middle component */}

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
          <div className='p-2 m-2 rounded border shadow-md bg-white'>
            <div className='flex justify-start items-start'>
              <img className="mx-2 h-12 w-12 rounded-[50%] border" src={items.image}/>
              <div className='flex-col justify-start items-start'>
                <div className='font-semibold'>{items.name}</div>
                <div className='text-sm flex items-center'>4 hours ago . <GlobeAltIcon className='h-4 w-4 '/></div>
              </div>
            </div>
            <div className='flex justify-start items-start m-2 text-sm'>{items.caption}</div>
            <img className="object-cover w-full" src={items.post}/>
            <div className='flex m-2 justify-between'>
              <div className='flex'>
                <div className='h-6 w-6 bg-lightblue rounded-[50%] p-1'><HandThumbUpIcon className='text-white'/></div>
                <div className='h-6 w-6 bg-red-500 rounded-[50%] p-1'><HeartIcon className='text-white'/></div>
                <span className='mx-2'>7</span>
              </div>
              <div>2 comments</div>
            </div>
            <div className='flex justify-evenly border-y p-2'>
                <div className='flex justify-center items-center w-36'><HandThumbUpIcon className='h-6 w-6 m-2'/>Like</div>
                <div className='flex justify-center items-center w-36'><ChatBubbleBottomCenterIcon className='h-6 w-6 m-2'/>Comment</div>
                <div className='flex justify-center items-center w-36'><ArrowUturnRightIcon className='h-6 w-6 m-2'/>Share</div>
            </div>

          </div>

        ))
      }
    </div>

    {/* Right component */}
    <div className='w-3/12 p-4 overflow-y-scroll bg-gray-100'>
    <div className='flex justify-between items-center px-2 py-4 text-gray-500'>
      <div className='text-gray-500 text-lg font-bold'>Friend requests</div>
      <span className='text-darkblue'>See all</span>
    </div>
    {
      friendreqst.map((items)=> (
        <div className='flex justify-start items-center hover:bg-gray-200 rounded'>
          <img className="h-16 w-16 border rounded-[50%] m-2" src={items.image}/>
          <div className='flex-col justify-start'>
            <div   className='font-semibold'>{items.name}</div>
            <div className='w-auto'>
              <button className='bg-lightblue rounded p-2 mx-1 w-24 text-white font-semibold'>Confirm</button>
              <button className='bg-gray-300 rounded p-2 mx-1 w-24 font-semibold'>Delete</button>
            </div>
          </div>
        </div>
      ))
    }


    <div className='flex justify-between items-center px-2 py-4 text-gray-500'>
      <div className='text-gray-500 text-lg font-bold'>Contacts</div>
      <MagnifyingGlassCircleIcon className='h-8 w-8'/>
    </div>
    {
      contacts.map((items)=> (
        <div className='flex justify-start items-center hover:bg-gray-200 rounded'>
          <img className="h-10 w-10 border rounded-[50%] m-2" src={items.image}/>
          <span className='font-semibold'>{items.name}</span>
        </div>
      ))
    }

    </div>





      </div>


    </>
  )
}

export default Profile