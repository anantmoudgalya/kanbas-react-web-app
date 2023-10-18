import "../../styles/theme.css";
import StatusButtons from "./StatusButtons";
import StatusToDo from "./StatusToDo";
import StatusComingUp from "./StatusComingUp";

function CourseStatus() {
  return (
    <div className="kanbas-status-container">
      <StatusButtons />
      <StatusToDo />
      <StatusComingUp />
    </div>
  );
}
export default CourseStatus;
