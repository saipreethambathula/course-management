import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white  px-6 min-h-16 border-b flex justify-between items-center">
      <h3 className="text-xl font-bold text-black">Course Manager</h3>
      <button
        onClick={logout}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
