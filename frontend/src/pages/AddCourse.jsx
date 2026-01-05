import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const AddCourse = () => {
  const [form, setForm] = useState({
    courseName: "",
    description: "",
    instructor: "",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/courses", form);
    navigate("/courses");
  };

  return (
    <>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white px-4">
        <form
          onSubmit={submit}
          className="w-full max-w-md bg-white border border-gray-300 rounded-lg p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Add Course
          </h2>

          <input
            type="text"
            placeholder="Course Name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black mb-4"
            onChange={(e) => setForm({ ...form, courseName: e.target.value })}
            required
          />

          <textarea
            placeholder="Description"
            rows="4"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black mb-4 resize-none"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Instructor"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black mb-6"
            onChange={(e) => setForm({ ...form, instructor: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Add Course
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
