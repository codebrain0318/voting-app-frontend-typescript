import React, { ReactNode } from 'react';
import PropTypes from 'prop-types'

import Header from './Header'
import Sidebar from './Sidebar'
import SearchBox from '../components/SearchBox'
import SettingButton from '../components/SettingButton'

import '@fontsource/sen'
import '@fontsource/karla'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col-reverse w-full h-screen overflow-hidden md:flex-row bg-bgColor'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Header />
        <div className='flex flex-col-reverse items-center justify-center flex-1 gap-8 p-8 text-2xl text-white lg:flex-row'>
          <div className='flex flex-col items-start justify-start w-full h-full px-8 py-6 rounded-lg lg:w-1/3 bg-panelBgColor'>
            <div className='font-extrabold font-karla'>
              Side Title
            </div>
          </div>
          <div className='relative flex flex-col items-start justify-start w-full h-full px-8 py-6 rounded-lg lg:w-2/3 bg-panelBgColor'>
            {children}
            <SettingButton />
          </div>
          <div className="w-full md:hidden">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout;