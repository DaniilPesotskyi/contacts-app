import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div style={{ maxWidth: 1530, margin: '0 auto'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
