import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    courseName: "",
    description: "",
    instructor: "",
  });

  useEffect(() => {
    api.get(`/course/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/course/${id}`, form);
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
            Edit Course
          </h2>

          <input
            type="text"
            value={form.courseName}
            placeholder="Course Name"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black mb-4"
            onChange={(e) => setForm({ ...form, courseName: e.target.value })}
            required
          />

          <textarea
            value={form.description}
            placeholder="Description"
            rows="4"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black mb-4 resize-none"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          <input
            type="text"
            value={form.instructor}
            placeholder="Instructor"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black mb-6"
            onChange={(e) => setForm({ ...form, instructor: e.target.value })}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Update Course
          </button>
        </form>
      </div>
    </>
  );
};

export default EditCourse;
