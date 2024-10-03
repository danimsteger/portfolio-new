import { Card, Nav, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
export default function Experiences() {
  const [selectedTab, setSelectedTab] = useState("first");
  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    console.log(`clicked on tab: ${tabId}`);
  };

  const imageStyle = (tab) => {
    if (selectedTab === tab) {
      return {
        width: "150px",
        height: "150px",
        border: "4px solid var(--blush)", // Add an outline style when the tab is active
        boxShadow: "2px 2px 5px var(--blush)",
      };
    } else {
      return {
        width: "125px",
        height: "125px",
      };
    }
  };
  return (
    <div style={{ margin: 100 }} id="experience-section" className="section">
      <h1 className="calistoga-regular headers experiences-title">
        Education and Experiences
      </h1>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Card className="experiences-card">
          <Card.Header className="experiences-header">
            <Nav
              variant="pills"
              defaultActiveKey="first"
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
                    <h3 className="head calistoga-regular">
                      University of North Carolina Charlotte Coding Bootcamp
                    </h3>
                    <h3 className="head2 montserrat-alternates-bold">
                      Completed 2024
                    </h3>
                  </div>
                  <h5 className="head2 montserrat-alternates-bold">
                    Certificate | Full Stack Development
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    Grade: A+
                  </h5>
                </Card.Title>
                <Card.Text className="bodyy montserrat-alternates-regular">
                  Completed a 12-week web development boot camp that provided a
                  comprehensive foundation in both front-end and back-end
                  development. The program offered hands-on experience with
                  essential web technologies, databases, and server-side
                  development, focusing on building dynamic web applications,
                  integrating APIs, and applying deployment practices.
                  Emphasizing project management and collaboration, the boot
                  camp included several group projects that simulated real-world
                  scenarios, equipping participants with the skills needed for a
                  career in web development.
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
                    <h3 className="head calistoga-regular">
                      Gravatt Camp and Conference Center
                    </h3>
                    <h3 className="head2 montserrat-alternates-bold">
                      2014 - 2024
                    </h3>
                  </div>
                  <h5 className="head2 montserrat-alternates-bold">
                    Aiken, SC
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    <span style={{ fontWeight: "bold" }}>Full-Time:</span>{" "}
                    Director of Hospitality | Camp Director
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    <span style={{ fontWeight: "bold" }}>Seasonal:</span>{" "}
                    Technology Director | Head Counselor | Counselor{" "}
                  </h5>
                </Card.Title>
                <Card.Text className="bodyy montserrat-alternates-regular">
                  My time at Gravatt Camp and Conference Center was a
                  transformative experience that significantly shaped my
                  leadership and organizational skills. Working in a
                  mission-driven environment dedicated to faith formation,
                  hospitality, and community building, I learned to manage large
                  teams, develop programs, navigate complex challenges, and
                  create an inclusive atmosphere that fosters growth and
                  belonging. Gravatt's emphasis on relationship-building,
                  ethical leadership, and teamwork allowed me to grow both
                  personally and professionally, equipping me with the skills to
                  lead with purpose and empathy.
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
                    <h3 className="head calistoga-regular">
                      Columbia College - Columbia, SC
                    </h3>
                    <h3 className="head2 montserrat-alternates-bold">
                      Completed 2022
                    </h3>
                  </div>
                  <h5 className="head2 montserrat-alternates-bold">
                    Master of Arts | Organizational Leadership
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    GPA: 3.95 | Summa Cum Laude
                  </h5>
                </Card.Title>
                <Card.Text className="bodyy montserrat-alternates-regular">
                  Completed a Master of Arts in Organizational Leadership
                  through a 100% online program designed for working
                  professionals. This intensive program combined real-world
                  practice with a strong academic approach, focusing on
                  leadership challenges and opportunities in the 21st century.
                  The coursework covered ethical leadership, informed
                  decision-making, and mentorship, and was delivered through
                  interactive, small-sized classes led by diverse faculty with
                  expertise in leadership, management, and consulting. The
                  program, provided a solid foundation for advancing in
                  leadership roles across various professional fields.
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
                    <h3 className="head calistoga-regular">Freelance Tutor </h3>
                    <h3 className="head2 montserrat-alternates-bold">
                      2016 - Present
                    </h3>
                  </div>
                  <h5 className="head2 montserrat-alternates-bold">
                    Columbia, SC
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    Tutored by Teachers | Remote
                  </h5>
                </Card.Title>
                <Card.Text className="bodyy montserrat-alternates-regular">
                  As a math tutor, I work both online through Tutored by
                  Teachers and freelance with local students, providing
                  personalized instruction that helps bridge learning gaps and
                  build strong foundational skills. Tutored by Teachers'
                  "Tutoring for All" program allows me to deliver flexible,
                  high-impact lessons to students from grades K-12, improving
                  engagement and academic outcomes in a virtual setting. I enjoy
                  fostering critical thinking and problem-solving skills,
                  empowering students to tackle complex problems confidently.
                  Whether online or in-person, my tutoring approach is focused
                  on adapting to each student's unique needs, creating an
                  encouraging and effective learning environment.
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
                    <h3 className="head calistoga-regular">Math Teacher</h3>
                    <h3 className="head2 montserrat-alternates-bold">
                      2019 - 2023
                    </h3>
                  </div>
                  <h5 className="head2 montserrat-alternates-bold">
                    Richland One School District
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    Columbia, SC
                  </h5>
                </Card.Title>
                <Card.Text className="bodyy montserrat-alternates-regular">
                  As a seventh-grade math teacher, I taught students across all
                  levels, including advanced courses like Algebra 1, where I
                  developed and implemented differentiated instruction
                  strategies to meet diverse learning needs. I honed my skills
                  in classroom management, curriculum development, and
                  data-driven decision-making to create engaging lessons that
                  built strong mathematical foundations and critical thinking
                  abilities. My experience also involved fostering a positive
                  learning environment that encouraged collaboration,
                  resilience, and a growth mindset among students.
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
                    <h3 className="head calistoga-regular">
                      University of South Carolina Honors College
                    </h3>
                    <h3 className="head2 montserrat-alternates-bold">
                      2015 - 2019
                    </h3>
                  </div>
                  <h5 className="head2 montserrat-alternates-bold">
                    Middle Level Education | Mathematics & Social Studies
                  </h5>
                  <h5 className="head3 montserrat-alternates-semibold">
                    GPA: 3.95 | Summa Cum Laude
                  </h5>
                </Card.Title>
                <Card.Text className="bodyy montserrat-alternates-regular">
                  At the University of South Carolina, I studied Middle Level
                  Education in the prestigious Honors College, where I gained a
                  deep understanding of pedagogical theory and best practices
                  for teaching mathematics and social studies to middle school
                  students. The rigorous curriculum challenged me to think
                  critically about educational methods and their impact on
                  student learning. For my senior thesis, I focused on
                  integrating geography into other subjects, highlighting the
                  benefits of cross-curricular learning in enhancing students'
                  spatial awareness, critical thinking, and engagement. This
                  experience refined my research, analytical, and curriculum
                  development skills, preparing me for a dynamic career in
                  education and beyond.
                </Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
