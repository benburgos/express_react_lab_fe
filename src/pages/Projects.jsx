import { useState, useEffect } from 'react';
import './Projects.css';
import { Heading, Button } from 'react-bulma-components';

function Projects(props) {
  // Create state to hold Projects
  const [projects, setProjects] = useState(null);

  // Create function to make the API call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + 'projects');
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect,
  // so it only happens once on component load.
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed
  //once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className="project-detail">
        <Heading>{project.name}</Heading>
        <img src={project.image} />
        <div className='button-container'>
        <a href={project.git}>
          <Button color='info'>Github</Button>
        </a>
        <a href={project.live}>
          <Button color='success'>Live Site</Button>
        </a>
        </div>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
