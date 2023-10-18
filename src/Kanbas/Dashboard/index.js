import db from "../Database";
import "font-awesome/css/font-awesome.css";
import "../styles/fontawesome-free-6.4.2-web/css/all.css";
import "../styles/theme.css";

const { courses } = db;

function Dashboard() {
  return (
    <div className="kanbas-column" style={{ width: "100%" }}>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <a
            href={`../#/Kanbas/Courses/${course._id}`}
            className="kanbas-card"
            key={course._id}
          >
            <div className="card">
              <div className={`card-header bg-${randomColorGenerator(course._id)}`}>
                <i className="fa fa-ellipsis-vertical float-end kanbas-ellipsis"></i>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="card-body kanbas-card-height">
                <h5 className="card-title">{`${course.number} ${course._id} ${course.name}`}</h5>
                <h6 className="card-title">{`${course.number}.${course._id}`}</h6>
                <p className="card-text">{getCourseTerm(course.startDate)}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function getCourseTerm(startDate) {
  const date = new Date(startDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  let term = "";

  if (month >= 1 && month <= 4) {
    term = "Spring";
  } else if (month >= 5 && month <= 8) {
    term = "Summer";
  } else if (month >= 9 && month <= 12) {
    term = "Fall";
  }

  if (term) {
    return `${term} ${year} Semester`;
  }

  return "";
}

function randomColorGenerator() {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  return selectedColor;
}

export default Dashboard;
