import "../../styles/theme.css";

function StatusToDo() {
  const todolist = [
    {
      title: "Grade Rocket Propulsion - Assignment 1",
      icon: "fa-solid fa-circle-exclamation",
      points: "100 points",
      dueDate: "Sep 18 at 11:59pm",
    },
    {
      title: "Grade Aerodynamics - Assignment 1",
      icon: "fa-solid fa-circle-exclamation",
      points: "85 points",
      dueDate: "Sep 20 at 10:00pm",
    },
    {
      title: "Grade Spacecraft Design - Assignment 1",
      icon: "fa-solid fa-circle-exclamation",
      points: "95 points",
      dueDate: "Sep 22 at 9:30pm",
    },
  ];

  return (
    <div>
      <div>To-Do</div>
      <hr />
      {todolist.map((todoitem, index) => (
        <div className="kanbas-red float-left mb-3" key={index}>
          <i className={todoitem.icon + " mt-1 me-1"}></i>
          <a href={window.location.href} className="kanbas-hyperlink ps-1">
            {todoitem.title}
          </a>
          <div className="kanbas-black ps-4">{todoitem.points}</div>
          <div className="kanbas-black ps-4">{todoitem.dueDate}</div>
        </div>
      ))}
    </div>
  );
}
export default StatusToDo;
