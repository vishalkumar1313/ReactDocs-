import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref=useRef(null);
    const data=[
        {
            desc:"We have implemented these measures as an extra layer of security, which is extremely important to us. Questions or concerns?",
            filesize:".10mb",
            close: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"},
        },
        {
            desc:"We have implemented these measures as an extra layer of security, which is extremely important to us. Questions or concerns?",
            filesize:".9mb",
            close: true,
            tag:{isOpen:false,tagTitle:"Close Now",tagColor:"green"},
        },
        {
            desc:"We have implemented these measures as an extra layer of security, which is extremely important to us. Questions or concerns?",
            filesize:".9mb",
            close: false,
            tag:{isOpen:true,tagTitle:"Upload",tagColor:"blue"},
        },
        {
            desc:"We have implemented these measures as an extra layer of security, which is extremely important to us. Questions or concerns?",
            filesize:".9mb",
            close: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
    ];
  return (
    <div ref={ref} className='fixed w-full h-full z-[3] top-[0] left-[0] flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))} 
    </div>
  )
}

export default Foreground