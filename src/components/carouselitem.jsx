import { Carousel } from "react-bootstrap";

function CarouselProject({ project }) {
  return (
    <Carousel.Item>
      <img src={project.image} />
      <Carousel.Caption>
        <h3>{project.name}</h3>
        <p>helloooooo</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default CarouselProject;
