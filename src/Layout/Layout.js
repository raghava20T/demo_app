import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="grid place-items-center min-h-[100vh] w-full p-5">
      {children}
    </div>
  );
};

export default Layout;
