import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid place-items-center min-h-[100vh] w-full py-5 bg-primary-color">
      {children}
    </div>
  );
};

export default Layout;
