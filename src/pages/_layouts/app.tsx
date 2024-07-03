import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <span>Inside App</span>
      <Outlet />
    </div>
  );
};
