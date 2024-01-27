import React from "react";
import Card from "react-bootstrap/Card";

function SummaryCard() {
  return (
    <Card className="summary-card quote-card-view">
      <Card.Body>
        <Card.Text className="text-start" style={{textIndent:"20px"}}>
          <p>
          In only a year, I have collapsed time, through formal study, freelance, and by obtaining a junior developer role in software development. I am seasoned by my current work on a project of nine React developers in a Scrum/Agile environment. I have experience collaborating to create a library of components, constantly adapting to the way that one component’s logic is always related to another. I am comfortable navigating Git and I deal with the complexities of version control every day.
          </p>
          <p>
          I am involved in advanced filtering and eshop functionality (google maps integration, backend logic). My role as a front end developer involves regular interactions with a designer to ensure that the user interface aligns perfectly with user experience expectations. I am actively involved in integrating and working with APIs to create comprehensive web solutions. I understand the importance of clean and intentional code in a large project as this experience has given me a deep understanding of how front-end and back-end systems interact and the importance of creating seamless user experiences.
          </p>
          <p>
          My journey in web development began with building full-stack Python websites and MySQL databases. This foundational experience honed my skills in CRUD operations and managing complex database one-to-one and one-to-many relationships. I learned about the importance of a well-structured and efficient backend system, early on. As I progressed, my interest in React and JSX, combined with SCSS, revolutionized my approach to front-end development. This skill-set enables me to develop dynamic and user-friendly interfaces, as showcased in my portfolio.
          </p>
          <p>
          In my current, remote, role my Typescript contributions have been pivotal in implementing advanced filtering and e-commerce functionality, including Google Maps integration and intricate backend logic. Regular collaboration with designers ensures that our user interface consistently meets and exceeds user experience expectations.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default SummaryCard;
