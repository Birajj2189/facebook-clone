import React from 'react'

const leftcomp = [
  {name : 'Biraj Mahanta', href:'/Profile', class:`bg-[url('https://www.facebook.com/photo/?fbid=1324187238430129&amp;set=a.105447676970764')] bg-[0_-304px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2 `},
  {name : 'Friends', href:'#', class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-304px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Events', href:'#', class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/vWSUA-u7jLw.png')] bg-[0_-38px] [background-size:38px_76px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Saved', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0px_-456px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Groups', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-190px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Videos', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-38px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Marketplace', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-532px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
  {name : 'Feeds', href:'#' , class:`bg-[url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png')] bg-[0_-418px] [background-size:38px_570px] w-[36px] h-[36px] bg-no-repeat inline-block m-2`},
] 

const Left = () => {
  return (
    <div className='w-3/12 bg-gray-100 overflow-y-scroll'>
      {leftcomp.map((item) => (
        <a href={item.href} className='h-16 p-2 flex justify-start items-center hover:bg-gray-200 rounded'>
        
          <i className={item.class}/>
          <span className='font-semibold '>{item.name}</span>
        </a>
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
  )
}

export default Left