import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1 className="mt-3 ms-3">
        {course.number} {course.name}
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="mt-4 ms-3 overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
