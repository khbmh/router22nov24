import { NavLink, Link} from 'react-router';

function Nav() {
  return (
    <div className="min-h-[10vh] bg-white/15 px-4">
      <div className="flex items-center justify-between py-4">
        <Link className="text-xl font-semibold rounded-sm" to="/">
          {' '}
          Router
        </Link>
        <div className="flex gap-8">
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
        <div className="flex gap-8">
          <NavLink className="bg-slate-900 px-3 py-1" to="/auth/login">
            LogIn
          </NavLink>
          <NavLink className="bg-slate-900 px-3 py-1" to="/auth/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
