import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar'; 
const Layout = ({ children }) => {
  return (
    
    <div className="Layout">
      <Topbar />
      <Sidebar>
        {children}
      </Sidebar>
    </div>
    
  );
};

export default Layout;
