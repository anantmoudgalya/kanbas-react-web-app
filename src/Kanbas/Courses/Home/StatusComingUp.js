import "../../styles/theme.css";

function StatusComingUp() {
  const upcoming = [
    {
      title: "Rocket Science Basics",
      course: "RS101 - Fall 2023",
      time: "Sep 11 at 11:45am",
    },
    {
      title: "Advanced Aerodynamics Lecture",
      course: "RS102 - Fall 2023",
      time: "Sep 11 at 6pm",
    },
    {
      title: "Spacecraft Design Masterclass",
      course: "RS103 - Fall 2023",
      time: "Sep 11 at 7pm",
    },
  ];

  return (
    <div>
      <div>
        <div className="float-start">Coming Up</div>
        <div className="float-end">
          <i className="fa-solid fa-calendar float-start mt-1 me-1"></i>
          <a
            href={window.location.href}
            className="kanbas-hyperlink float-start"
          >
            View Calendar
          </a>
        </div>
      </div>

      <br />
      <hr />

      {upcoming.map((event, index) => (
        <div key={index} className="float-left mb-3">
          <i className="fa-solid fa-calendar me-1"></i>
          <a href={window.location.href} className="kanbas-hyperlink ps-1">
            {event.title}
          </a>
          <div className="ps-4">{event.course}</div>
          <div className="ps-4">{event.time}</div>
        </div>
      ))}
    </div>
  );
}
export default StatusComingUp;
