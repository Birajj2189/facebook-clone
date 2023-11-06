import React from 'react'
import {
  MagnifyingGlassCircleIcon

} from '@heroicons/react/24/outline'
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

const Right = () => {
  return (
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
  )
}

export default Right