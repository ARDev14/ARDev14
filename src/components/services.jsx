import React from "react";
import styled from "styled-components";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Element } from "react-scroll";
import Title from "./Title";
// #region styled-components
const StyledCard = styled(Card)`
  margin-bottom: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServicesSection = styled(Container)`
  padding: 20px;
  border-radius: 5px;
`;
// #endregion

// #region component
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Business & Personal Portfolio",
      description: "I can create stunning portfolios to showcase your work and attract clients.",
      icon: "streamline:money-graph-analytics-business-product-graph-data-chart-analysis", // Change to a relevant icon
    },
    {
      id: 2,
      title: "E-Commerce Websites",
      description: "Get a fully functional e-commerce site tailored to your business needs.",
      icon: "mdi:cart",
    },
    {
      id: 3,
      title: "Custom Software Solutions",
      description: "Any type of software you need, tailored to your requirements.",
      icon: "mdi:code-tags",
    },
  ];

  return (
    <Element name={"Services"} id="services">
         <ServicesSection className="text-center my-4">
         <Title size={"h2"} text={"Services"} />
         <br/><br/><br/>
      <Row>
    
        {services.map(service => (
          <Col md={4} key={service.id}>
            <StyledCard>
              <Card.Body>
                <Icon icon={service.icon} style={{ fontSize: "2rem", marginBottom: "10px" }} />
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </StyledCard>
          </Col>
        ))}
      </Row>
      
      <h5>
        Looking to grow your business? I can help with all your technology needs at a reasonable price!
      </h5>
      {/* <h5>
        Once we start a project, I will display completed milestones to showcase my work.
      </h5> */}
    </ServicesSection>
    </Element>
   
  );
};
// #endregion

export default Services;
