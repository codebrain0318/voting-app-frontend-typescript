import React, { ReactNode } from 'react';
import PropTypes from 'prop-types'

import Header from './Header'
import Sidebar from './Sidebar'

import '@fontsource/sen'
import '@fontsource/karla'

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col-reverse w-full h-screen overflow-hidden md:flex-row bg-bgColor'>
      <Sidebar />
      <div className='flex flex-col flex-1 h-[calc(100vh-70px)] md:h-full'>
        <Header />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout;