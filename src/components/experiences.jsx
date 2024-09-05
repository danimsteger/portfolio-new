import { Card, Nav, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
export default function Experiences() {
  const [selectedTab, setSelectedTab] = useState(null);
  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    console.log(`clicked on tab: ${tabId}`);
  };

  const imageStyle = (tab) => {
    if (selectedTab === tab) {
      return {
        width: "150px",
        height: "150px",
        border: "3px solid var(--mint)", // Add an outline style when the tab is active
        boxShadow: "2px 2px 5px var(--mint)",
      };
    } else {
      return {
        width: "125px",
        height: "125px",
      };
    }
  };
  return (
    <div style={{ margin: 100 }}>
      <h1 style={{ textAlign: "center", margin: 40 }}>
        Education and Experiences
      </h1>
      <Card>
        <Card.Header className="experiences-header">
          <Nav
            variant="pills"
            defaultActiveKey=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick("first")}>
                <Image
                  src="../assets/charlotte.png"
                  style={imageStyle("first")}
                  rounded
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick("second")}>
                <Image
                  src="./assets/gravatt.png"
                  style={imageStyle("second")}
                  rounded
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick("third")}>
                <Image
                  src="./assets/columbia.png"
                  style={imageStyle("third")}
                  rounded
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick("fourth")}>
                <Image
                  src="./assets/tbt.png"
                  style={imageStyle("fourth")}
                  rounded
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick("fifth")}>
                <Image
                  src="./assets/richland.png"
                  style={imageStyle("fifth")}
                  rounded
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={() => handleTabClick("sixth")}>
                <Image
                  src="./assets/uofsc.png"
                  style={imageStyle("sixth")}
                  rounded
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="experiences-body">
          {selectedTab === "first" && (
            <>
              <Card.Title>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>
                    University of North Carolina Charlotte Coding Bootcamp
                  </h3>
                  <h3>Completed 2024</h3>
                </div>
                <h5>Certificate | Full Stack Development</h5>
                <h5>Grade: A+</h5>
              </Card.Title>
              <Card.Text>
                Completed a 12-week web development boot camp that provided a
                comprehensive foundation in both front-end and back-end
                development. The program offered hands-on experience with
                essential web technologies, databases, and server-side
                development, focusing on building dynamic web applications,
                integrating APIs, and applying deployment practices. Emphasizing
                project management and collaboration, the boot camp included
                several group projects that simulated real-world scenarios,
                equipping participants with the skills needed for a career in
                web development.
              </Card.Text>
            </>
          )}

          {selectedTab === "second" && (
            <>
              <Card.Title>
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Gravatt Camp and Conference Center</h3>
                  <h3>2014 - 2024</h3>
                </div>
                <h5>Aiken, SC</h5>
                <h5>
                  <span style={{ fontWeight: "bold" }}>Full-Time:</span>{" "}
                  Director of Hospitality | Camp Director
                </h5>
                <h5>
                  <span style={{ fontWeight: "bold" }}>Seasonal:</span>{" "}
                  Technology Director | Head Counselor | Counselor{" "}
                </h5>
              </Card.Title>
              <Card.Text>
                My time at Gravatt Camp and Conference Center was a
                transformative experience that significantly shaped my
                leadership and organizational skills. Working in a
                mission-driven environment dedicated to faith formation,
                hospitality, and community building, I learned to manage large
                teams, develop programs, navigate complex challenges, and create
                an inclusive atmosphere that fosters growth and belonging.
                Gravatt's emphasis on relationship-building, ethical leadership,
                and teamwork allowed me to grow both personally and
                professionally, equipping me with the skills to lead with
                purpose and empathy.
              </Card.Text>
            </>
          )}
          {selectedTab === "third" && (
            <>
              <Card.Title>
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Columbia College - Columbia, SC</h3>
                  <h3>Completed 2022</h3>
                </div>
                <h5>Master of Arts | Organizational Leadership</h5>
                <h5>GPA: 3.95 | Summa Cum Laude</h5>
              </Card.Title>
              <Card.Text>
                Completed a Master of Arts in Organizational Leadership through
                a 100% online program designed for working professionals. This
                intensive program combined real-world practice with a strong
                academic approach, focusing on leadership challenges and
                opportunities in the 21st century. The coursework covered
                ethical leadership, informed decision-making, and mentorship,
                and was delivered through interactive, small-sized classes led
                by diverse faculty with expertise in leadership, management, and
                consulting. The program, provided a solid foundation for
                advancing in leadership roles across various professional
                fields.
              </Card.Text>
            </>
          )}
          {selectedTab === "fourth" && (
            <>
              <Card.Title>
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Freelance Tutor </h3>
                  <h3>2016 - Present</h3>
                </div>
                <h5>Columbia, SC</h5>
                <h5>Tutored by Teachers | Remote</h5>
              </Card.Title>
              <Card.Text>
                As a math tutor, I work both online through Tutored by Teachers
                and freelance with local students, providing personalized
                instruction that helps bridge learning gaps and build strong
                foundational skills. Tutored by Teachers' "Tutoring for All"
                program allows me to deliver flexible, high-impact lessons to
                students from grades K-12, improving engagement and academic
                outcomes in a virtual setting. I enjoy fostering critical
                thinking and problem-solving skills, empowering students to
                tackle complex problems confidently. Whether online or
                in-person, my tutoring approach is focused on adapting to each
                student's unique needs, creating an encouraging and effective
                learning environment.
              </Card.Text>
            </>
          )}
          {selectedTab === "fifth" && (
            <>
              <Card.Title>
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>Math Teacher</h3>
                  <h3>2019 - 2023</h3>
                </div>
                <h5>Richland One School District</h5>
                <h5>Columbia, SC</h5>
              </Card.Title>
              <Card.Text>
                As a seventh-grade math teacher, I taught students across all
                levels, including advanced courses like Algebra 1, where I
                developed and implemented differentiated instruction strategies
                to meet diverse learning needs. I honed my skills in classroom
                management, curriculum development, and data-driven
                decision-making to create engaging lessons that built strong
                mathematical foundations and critical thinking abilities. My
                experience also involved fostering a positive learning
                environment that encouraged collaboration, resilience, and a
                growth mindset among students.
              </Card.Text>
            </>
          )}
          {selectedTab === "sixth" && (
            <>
              <Card.Title>
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>University of South Carolina Honors College</h3>
                  <h3>2015 - 2019</h3>
                </div>
                <h5>Middle Level Education | Mathematics & Social Studies</h5>
                <h5>GPA: 3.95 | Summa Cum Laude</h5>
              </Card.Title>
              <Card.Text>
                At the University of South Carolina, I studied Middle Level
                Education in the prestigious Honors College, where I gained a
                deep understanding of pedagogical theory and best practices for
                teaching mathematics and social studies to middle school
                students. The rigorous curriculum challenged me to think
                critically about educational methods and their impact on student
                learning. For my senior thesis, I focused on integrating
                geography into other subjects, highlighting the benefits of
                cross-curricular learning in enhancing students' spatial
                awareness, critical thinking, and engagement. This experience
                refined my research, analytical, and curriculum development
                skills, preparing me for a dynamic career in education and
                beyond.
              </Card.Text>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
