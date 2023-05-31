import React, { useState } from 'react'
import sidebarbutton from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom'
import LayersIcon from '@mui/icons-material/Layers'
import WidgetsIcon from '@mui/icons-material/Widgets'
import SummarizeIcon from '@mui/icons-material/Summarize'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function Sidebar() {
  const [open, setOpen] = useState(false)
  const [submenuopen, setSubMenuOpen] = useState(false)

  const Menus = [
    { title: 'All Dashboard', src: <LayersIcon />, path: '/' },
    { title: 'Vulnerability', src: <WidgetsIcon />, path: '/vulnerability' },
    { title: 'Patches', src: <SummarizeIcon />, path: '/patch' },
    {
      title: 'Audit ',
      src: <AccountBalanceWalletIcon />,
      path: '/audit',
      submenuitems: [{ title: 'sub1' }, { title: 'sub2' }, { title: 'sub3' }],
      submenu: true
    }
  ]

  return (
    <div className={`${open ? 'w-64' : 'w-20 '} bg-dark-grey  h-screen sticky top-0 p-5   pt-8  duration-300`}>
      <img
        alt=''
        src={sidebarbutton}
        className={`absolute cursor-pointer -right-4 bottom-9 w-7  border-grey
           border-2 rounded-full text-white  ${open === true && 'rotate-180'} `}
        onClick={() => setOpen(!open)}
      />

      <div className='flex gap-x-4 items-center'>
        <p className='text-white'>Logo</p>
        <h3 className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'} `}>Soar</h3>
      </div>

      <ul className='pt-6'>
        {Menus.map((Menu, index) => (
          <NavLink key={index} to={Menu?.path}>
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 hover:text-pink-500`}
            >
              <span>{Menu?.src}</span>
              <span className={`${!open && 'hidden'} origin-left duration-200 ${!open && 'scale-0'}`}>{Menu.title}</span>
              {Menu?.submenu && open && (
                <ArrowDropDownIcon className={`${submenuopen && 'rotate-180'} mx-20`} onClick={() => setSubMenuOpen(!submenuopen)} />
              )}
            </li>
            {Menu?.submenu && submenuopen && (
              <ul>
                {Menu?.submenuitems?.map((subitem, index) => (
                  <li
                    key={index}
                    className={`${
                      open === false && 'hidden'
                    } flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl items-center gap-x-4 mx-10 hover:text-pink-500 `}
                  >
                    {subitem?.title}
                  </li>
                ))}
              </ul>
            )}
          </NavLink>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
