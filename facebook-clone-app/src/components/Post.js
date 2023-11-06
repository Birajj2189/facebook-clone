import React from 'react'

const Post = () => {
  return (
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

  )
}

export default Post