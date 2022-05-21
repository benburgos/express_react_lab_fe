import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Card, Button } from 'react-bulma-components';

const { Header, Image, Content, Footer } = Card;

function About(props) {
  // Create state to hold About data
  const [about, setAbout] = useState(null);

  // Create function to make API call
  const getAboutData = async () => {
    // Make API Call and Get Response
    const response = await fetch(props.URL + 'about');
    // Turn Response into Javascript Object
    const data = await response.json();
    // Set the About state to the data
    setAbout(data);
  };

  // Make the initial call for the data inside a useEffect,
  // So it only happens once on component load.
  useEffect(() => {
    getAboutData();
  }, []);

  // Define a function that will return JSX needed once we
  // get the data.
  const loaded = () => (
    <Card>
      <Header>
        <Image src={about.headshot} />
        {about.name}
        <br />
        {about.email}
      </Header>
      <Content>
        {about.bio}

        <br />
        <br />
        <Footer>
          <a href={about.linkedin}>
            <Button>LinkedIn</Button>
          </a>
          <a href="https://github.com/benburgos">
            <Button>Github</Button>
          </a>
        </Footer>
      </Content>
    </Card>
  );

  // If the data arrives return the result of loaded, if not
  // then an h1 that says 'loading...'
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
