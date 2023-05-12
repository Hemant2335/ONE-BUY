import Link from 'next/link';
import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const data = [
    { id: 1 , name : "Home" , url : '/'},
    { id: 2 , name : "About" , url : '/about'},
    { id: 3 , name : "Categories" , url : '/categories' , submenu : true},
    { id: 4 , name : "Contact" , url : '/contact'}

]
const submenu = [
    {id : 1 , name : "Nishant" , count : 2},
    {id : 2 , name : "Saransh" , count : 10},
    {id : 3 , name : "Ashish" , count : 1},
]

const MobileMenu = ({setmobileMenu,mobileMenu , setshowcatMenu , showcatMenu }) => {
  return (
    <div className='md:hidden'>
    <Link onClick={()=>setmobileMenu(!mobileMenu)} href={`#`} className='transition-all'>{(!mobileMenu)?<FiAlignJustify/>:<FiX/>}</Link>
    {mobileMenu && (<ul className='bg-white absolute top-9 right-6 min-w-[100px] px-1 shadow-lg rounded-sm'>
    {data.map((item)=>{
            return(
                <React.Fragment key={item?.id}>
                    {(item.submenu) ? <li className='cursor-pointer flex  items-center  relative text-black' 
                        onMouseEnter={()=>setshowcatMenu(true)}
                        onMouseLeave={()=>setshowcatMenu(false)}>
                        {item.name}
                        <FiChevronDown/>
                        {showcatMenu && (<ul className='bg-white absolute top-6 left-0 min-w-[50px] pr-1 shadow-lg rounded-sm'>
                            {submenu.map((cat)=>{
                                return (
                                    <Link href={`#`} key={cat.id}>
                                        <li className='h-7 flex text-black justify-between item-center px-3 hover:bg-black/[0.03] rounded-md'>
                                        {cat.name}
                                        <span className='opacity-50 text-sm px-2'>78</span>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>)}
                    </li>
                    : (
                        <Link href={item?.url} onClick={()=>setmobileMenu(false)}>
                        <li className= "cursor-pointer text-black font-medium text-sm">{item?.name}</li>
                        </Link>
                    )}
                </React.Fragment>
            )
        })}
    </ul>)}
    </div>
  )
}

export default MobileMenu