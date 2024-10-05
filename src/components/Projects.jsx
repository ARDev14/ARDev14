import React, { useEffect, useState } from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { selectProjects, selectMainProjects } from "../app/projectsSlice";
import { useGetProjectsQuery } from "../app/apiSlice";
// Router
import { Link } from "react-router-dom";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
const StyledMessageContainer = styled(Container)`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// #region component
const Projects = () => {
  const theme = useSelector(selectMode);
  const projects = useSelector(selectProjects);
  const mainProjects = useSelector(selectMainProjects);
  const { isLoading, isSuccess, isError, error } = useGetProjectsQuery();
   // Existing state and variables...
  const [isVisible, setIsVisible] = useState(false); // New state for visibility

   useEffect(() => {
     // Set visibility to true after the component mounts
     const timer = setTimeout(() => {
       setIsVisible(true);
     }, 100); // Delay for a smooth transition
     return () => clearTimeout(timer);
   }, []);

  const nonGithubProjects = [
    {
      id: 1,
      name: "Thriftops",
      description: "This is a custom project not hosted on GitHub.",
      image: "https://res.cloudinary.com/drdv5oubz/image/upload/v1728131516/image_wrsygo.png",
      homepage: "https://app.thriftops.com",
      html_url: "https://app.thriftops.com",
    },
    {
      id: 2,
      name: "My Vehicle Reports",
      description: "Vehicle History Reports That You Can Rely On.",
      image: "https://res.cloudinary.com/drdv5oubz/image/upload/v1728131636/image_zzbxww.png",
      homepage: "https://www.myvehiclereports.com/",
      html_url: "https://www.myvehiclereports.com/",
    },
    {
      id: 3,
      name: "AI Shoe Analyzer",
      description: "Evaluate your preloved shoes.",
      image: "https://res.cloudinary.com/drdv5oubz/image/upload/v1728142326/expart-2_hj5w2s.jpg",
      homepage: "http://sorter.thriftops.com/",
      html_url: "http://sorter.thriftops.com/",
    }
  ];

  let allProjects = [...nonGithubProjects]; // Merging arrays
  
  let content;

  if (isLoading) {
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        {!error && projects.length === 0 && (
          <h2 className="text-center">
            Oops, you do not have any GitHub projects yet...
          </h2>
        )}
        {allProjects.length !== 0 && (  // Use merged array here
          <>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
              {allProjects.map((element) => {
                return (
                  <Col key={element.id}>
                    <ProjectCard
                      image={element.image}
                      name={element.name}
                      description={element.description}
                      url={element.html_url}
                      demo={element.homepage}
                    />
                  </Col>
                );
              })}
            </Row>
            {/* {projects.length > 3 && (
              <Container className="text-center mt-5">
                <Link to="/All-Projects">
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    All <Icon icon="icomoon-free:github" /> Projects
                  </Button>
                </Link>
              </Container>
            )} */}
                <StyledMessageContainer className={`text-center my-4 ${isVisible ? "visible" : ""}`}>
                  <h5>
                    Interested in seeing more of my work? Feel free to reach out to me for additional projects!
                  </h5>
                </StyledMessageContainer>
          </>
          
        )}
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>{`${error.status} - check getProjects query in src/app/apiSlice.js`}</h2>
      </Container>
    );
  }

  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} />
          </Container>
          <br/><br/>
          {content}
        </Container>
      </section>
    </Element>
  );
};

// #endregion

export default Projects;
