import React from 'react';
import { Helmet } from 'react-helmet';
import Timeline from './Components/Timeline';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import PROFILE from './data/gsaini-profile.json'
import "./styles/app.scss";

const App = () => {
  const { title, name, aboutMe, emailAddress, mobileNumber, avatarUrl, location, tiles } = PROFILE;
  const profileDetails = { name, aboutMe, emailAddress, mobileNumber, avatarUrl, location };

  return (
    <div className="app-container">
      <Helmet>
          <meta
            name="description"
            content={title}
          />
          <link rel="icon" href={avatarUrl}/>
          <title>{title}</title>
      </Helmet>
      <Profile {...profileDetails} />
      {
        Object.entries(tiles).map(([key, tiles]) => <Timeline key={`tile-${key}`} {...tiles}/>)
      }

      <Footer />
    </div>

  );
};

export default App;