import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/stream">Stream</Link>
      <Link to="/examples">Examples</Link>
      <Link to="/tryout">Tryout</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  );
};
