import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there, I am <span className="purple">Madeline Gall </span>
            {/* from <span className="purple"> Cleveland, Ohio.</span> */}
            <br /><br/>
            <ImPointRight />  I am a creative full-stack developer specializing in React.
            <br/><br/>
            {/* <ImPointRight />  I am thrilled to offer my freelance services to help bring your digital ideas to life. 
            <br/><br/> */}
            <ImPointRight />  My focus is on creating engaging, user-friendly web applications that cater to the unique needs of each client. 
            <br/><br/>
            <ImPointRight />  I'm here to turn your vision into a functional, aesthetically pleasing digital solution.
            <br/><br/>
            <ImPointRight />  Let's work together to create web applications that look great and contribute to your business success.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
