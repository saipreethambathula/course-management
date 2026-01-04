import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/courses").then((res) => setCourses(res.data));
  }, []);

  const deleteCourse = async (id) => {
    await api.delete(`/course/${id}`);
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate("/courses/add")}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Add Course
          </button>
        </div>

        <div className="grid gap-6">
          {courses.length === 0 ? (
            <p className="text-center text-gray-400">No courses available.</p>
          ) : (
            courses.map((c) => (
              <div
                key={c.id}
                className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow transition bg-white"
              >
                <h4 className="text-lg font-bold mb-2 text-black">
                  {c.courseName}
                </h4>
                <p className="text-gray-700 mb-4">{c.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/courses/edit/${c.id}`)}
                    className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(c.id)}
                    className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;
