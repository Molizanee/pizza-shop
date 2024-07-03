import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen flex-col gap-5 p-5">
      <header className="bg-gray-800 p-4 text-center text-white">Header</header>
      <main className="flex-1 p-4">Main</main>
      <Outlet />
      <footer className="bg-gray-800 p-4 text-center text-white">Footer</footer>
    </div>
  );
};
