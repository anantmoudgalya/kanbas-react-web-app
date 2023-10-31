import db from "../../Database";
import { useParams } from "react-router-dom";

function GradeTable() {
  const { courseId } = useParams();
  const users = db.users;
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  const grades = db.grades;

  const renderAssignmentHeaders = () => {
    return assignments.map((assignment) => (
      <th key={assignment._id} className="kanbas-center-heading">
        {assignment.title}
      </th>
    ));
  };

  const renderStudentGrades = (enrollment, user) => {
    return assignments.map((assignment) => {
      const grade = grades.find(
        (g) => g.student === enrollment.user && g.assignment === assignment._id
      );

      return (
        <td key={assignment._id} className="kanbas-center-heading">
          {grade?.grade || ""}
        </td>
      );
    });
  };

  const renderStudentRows = () => {
    return enrollments.map((enrollment) => {
      const user = users.find((u) => u._id === enrollment.user);

      return (
        <tr key={enrollment.user}>
          <td>
            <a href={window.location.href} className="kanbas-hyperlink">
              {user.firstName} {user.lastName}
            </a>
          </td>
          {renderStudentGrades(enrollment, user)}
        </tr>
      );
    });
  };

  return (
    <div className="table-responsive mt-2">
      <table className="table table-striped border rounded">
        <thead>
          <tr>
            <th>Student Name</th>
            {renderAssignmentHeaders()}
          </tr>
        </thead>
        <tbody>{renderStudentRows()}</tbody>
      </table>
    </div>
  );
}

export default GradeTable;
