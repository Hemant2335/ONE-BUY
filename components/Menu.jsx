import React from 'react'
import Link from 'next/link'
import { FiAlignCenter } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

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


const Menu = ({showcatMenu , setshowcatMenu}) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-white'>
        {data.map((item)=>{
            return(
                <React.Fragment key={item?.id}>
                    {(item.submenu) ? <li className='cursor-pointer flex  items-center gap-2 relative' 
                        onMouseEnter={()=>setshowcatMenu(true)}
                        onMouseLeave={()=>setshowcatMenu(false)}>
                        {item.name}
                        <FiChevronDown/>
                        {showcatMenu && (<ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 shadow-lg rounded-sm'>
                            {submenu.map((cat)=>{
                                return (
                                    <Link href={`#`} key={cat.id}>
                                        <li className='h-12 flex text-black justify-between item-center px-3 py-2 hover:bg-black/[0.03] rounded-md'>
                                        {cat.name}
                                        <span className='opacity-50 text-sm'>78</span>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>)}
                    </li>
                    : (
                        <Link href={item?.url}>
                        <li className= "cursor-pointer">{item?.name}</li>
                        </Link>
                    )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default Menu