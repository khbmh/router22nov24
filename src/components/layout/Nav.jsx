import { useState } from 'react';
import { NavLink, Link } from 'react-router';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-[7vh] lg:min-h-[10vh] w-full bg-gray-700 px-4">
      <div className="flex items-center justify-between py-3 lg:py-4">
        <Link className="text-xl font-semibold rounded-sm font-mono" to="/">
          Router
        </Link>
        <div className="hidden lg:flex gap-8">
          <NavLink className="px-3 py-1 rounded-xl" to="/products">
            Products
          </NavLink>
          <NavLink className="px-3 py-1 rounded-xl" to="/services">
            Services
          </NavLink>
          <NavLink className="px-3 py-1 rounded-xl" to="/about">
            About
          </NavLink>
        </div>
        <div className="hidden lg:flex gap-8">
          <NavLink className="bg-slate-900 px-3 py-1" to="/auth/login">
            LogIn
          </NavLink>
          <NavLink className="bg-slate-900 px-3 py-1" to="/auth/register">
            Register
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="bg-slate-900 px-3 py-1 rounded-xl"
          >
            Menu
          </button>
        </div>
        <div
          className={`top-[7vh] lg:hidden absolute ${
            showMenu ? 'flex right-0' : 'hidden -right-5'
          } flex-col bg-gray-700 gap-10 items-center justify-between w-[100vw] h-fit py-6`}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <NavLink className="px-3 py-1 rounded-xl" to="/products">
              Products
            </NavLink>
            <NavLink className="px-3 py-1 rounded-xl" to="/services">
              Services
            </NavLink>
            <NavLink className="px-3 py-1 rounded-xl" to="/about">
              About
            </NavLink>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <NavLink className="bg-slate-900 px-3 py-1" to="/auth/login">
              LogIn
            </NavLink>
            <NavLink className="bg-slate-900 px-3 py-1" to="/auth/register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
