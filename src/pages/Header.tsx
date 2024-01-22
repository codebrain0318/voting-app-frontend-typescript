import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '@fontsource/sen'
import '@fontsource/karla'

import CircleProgressBar from '../components/CircularProgressBar'
import SearchBox from '../components/SearchBox'

import checkLogo from '../assets/check.svg'
import bellLogo from '../assets/bell.svg'
import avatarLogo from '../assets/avatar.svg'
import arrowdownLogo from '../assets/arrowdown.svg'

const Header = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 300 ? prevProgress + 1 : 0));
    }, 200);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='flex h-16 gap-6 px-6 py-3 border-b border-solid mflex-row border-borderColor'>
      <div className='hidden md:block md:w-1/3'>
        <SearchBox />
      </div>
      <div className='flex items-center justify-center w-16 h-full md:border-b md:border-solid md:hidden md:border-borderColor'>
        <Link className='flex items-center justify-center' to="/">
          <img src={checkLogo} height="60px" alt="Check logo" />
        </Link>
      </div>
      <div className='flex items-center justify-end w-full lg:justify-between md:w-2/3'>
        <div className='flex items-center gap-3 mr-8 lg:mr-0'>
          <CircleProgressBar percentage={String(progress)} />
          <div className='hidden text-base font-semibold leading-normal text-white lg:block font-karla'>
            seconds <span className='font-normal text-gray-600'>
              remaining
            </span>
          </div>
        </div>
        <div className='flex items-center justify-end gap-5'>
          <Link className='items-center justify-center hidden xl:flex' to="/upgrade">
            <button className='h-10 px-5 bg-trasparent hover:bg-borderColor border border-borderColor rounded-xl text-lg text-white font-sen'>Upgrade</button>
          </Link>
          <div className='items-center justify-center hidden h-10 p-3 border border-solid rounded-lg cursor-pointer xl:flex border-borderColor'>
            <img src={bellLogo} width="16px"  alt="bellLogo" />
          </div>
          <div className='flex-shrink-0 hidden h-10 px-3 p-1 font-semibold leading-7 text-blue-500 border border-solid rounded-lg cursor-pointer xl:block font-sen font-lg border-borderColor'>
            $500.99
          </div>
          <div className='flex items-center gap-3'>
            <Link to="/">
              <img src={avatarLogo} width="40px"  alt="avatarLogo" />
            </Link>
            <div className='flex items-center gap-1'>
              <div className='text-md font-extrabold leading-8 text-white font-sen'>
                Masie <span className='font-normal'>
                  Stark
                </span>
              </div>
              <img src={arrowdownLogo} width="16px"  alt="arrowdownLogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Header;