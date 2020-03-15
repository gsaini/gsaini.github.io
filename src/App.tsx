import React from 'react';
import { Helmet } from 'react-helmet';
import Timeline from './Components/Timeline';
import Profile from './Components/Profile';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Footer from './Components/Footer';
import PROFILE from './data/profile.json'
import "./styles/app.scss";

const App = () => {
  const { title, company, designation, name, aboutMe, emailAddress, mobileNumber, avatarUrl, location, tiles, educations, skills } = PROFILE;
  const profileDetails = { name, company, designation, aboutMe, emailAddress, mobileNumber, avatarUrl, location };

  return (
    <div className="app-container">
      <Helmet>
        <meta
          name="description"
          content={title}
        />
        <link rel="icon" href={avatarUrl} />
        <title>{title}</title>
      </Helmet>
      <Profile {...profileDetails} />
      {
        Object.entries(tiles).map(([key, tiles]) => <Timeline key={`tile-${key}`} {...tiles} />)
      }
      <Skills skills={skills} />
      <Education {...{ educations: educations }} />
      <Footer />
    </div>

  );
};

export default App;
