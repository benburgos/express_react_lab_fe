import { useState, useEffect } from 'react';

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
  useEffect(() => getAboutData(), []);

  // Define a function that will return JSX needed once we
  // get the data.
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3> | <h3>{about.linkedin}</h3>
      <p>{about.bio}</p>
    </div>
  );

  // If the data arrives return the result of loaded, if not
  // then an h1 that says 'loading...'
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
