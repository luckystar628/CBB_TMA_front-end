import { Outlet, useLocation } from "react-router-dom"
export default function Layout() {
  const location = useLocation()

  return (
    <div className="w-full h-screen bg-gradient-bottom-center p-5 poppins-thin">
        {location.pathname === '/' && <div className="text-3xl">Welcome to</div>}
        <img src="/nomad-logo.png" alt="logo" />
        <Outlet />
    </div>
  )
}

