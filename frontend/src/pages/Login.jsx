import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import api from "../api/axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/courses");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          Course Manager
        </h2>

        <h3 className="text-xl font-bold text-black border-l-3 pl-2">Login</h3>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black w-full pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <div className="p-3 border border-red-500 bg-red-50 text-red-600 rounded text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="bg-black text-white p-3 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-700 mt-2">
          No account?{" "}
          <Link
            to="/register"
            className="text-black underline hover:text-gray-800"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
