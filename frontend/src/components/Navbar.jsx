import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="border-b">
      <nav
        className="bg-white px-6 min-h-16 flex justify-between items-center"
        aria-label="Primary navigation"
      >
        <h1 className="text-xl font-bold text-black">Course Manager</h1>

        <button
          type="button"
          onClick={logout}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          aria-label="Logout from application"
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
