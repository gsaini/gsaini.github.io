import React from "react";
import Timeline from './Components/Timeline';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import PROFILE from './data/gsaini-profile.json'
import "./styles/app.scss";

// const PROFILE = {
//   "name": "Gopal Saini",
//   "aboutMe": "Full stack engineer with 10+ years experience in information technology, specialising in the design of application architectures and creafting of user experience.",
//   "mobileNumber": "+1 551 200 4845",
//   "emailAddress": "gopal.saini.work@gmail.com",
//   "avatarUrl": "https://avatars1.githubusercontent.com/u/1699577?s=400&u=96a4a04aaf87f52fcb51b729df9d80ef11be9537&v=4",
//   "tiles": 
//       {
//           "1": {
//               "title": "Carrier Timeline",
//               "timelines": [
//                   {
//                       "year": 2020,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   },
//                   {
//                       "year": 2019,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   }
//               ]
//           },
//           "2": {
//               "title": "",
//               "timelines": [
//                   {
//                       "year": 2018,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   },
//                   {
//                       "year": 2017,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   }
//               ]
//           },
//           "3": {
//               "title": "",
//               "timelines": [
//                   {
//                       "year": 2016,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   },
//                   {
//                       "year": 2015,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   }
//               ]
//           },
//           "4": {
//               "title": "",
//               "timelines": [
//                   {
//                       "year": 2014,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   },
//                   {
//                       "year": 2013,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   }
//               ]
//           },
//           "5": {
//               "title": "",
//               "timelines": [
//                   {
//                       "year": 2012,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   },
//                   {
//                       "year": 2011,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   }
//               ]
//           },
//           "6": {
//               "title": "",
//               "timelines": [
//                   {
//                       "year": 2010,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   },
//                   {
//                       "year": 2009,
//                       "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, perspiciatis! Voluptatem repellat dignissimos dolorum sapiente dolores, doloremque dolor debitis reprehenderit, quia aspernatur iure nostrum deserunt maiores eveniet hic officia? Aliquid?"
//                   }
//               ]
//           }
//       }
// };


const App = () => {
  const { name, aboutMe, emailAddress, mobileNumber, avatarUrl, tiles } = PROFILE;
  const profileDetails = { name, aboutMe, emailAddress, mobileNumber, avatarUrl };

  return (
    <div className="app-container">
      <Profile {...profileDetails} />
      {
        Object.entries(tiles).map(([key, tiles]) => <Timeline key={`tile-${key}`} {...tiles}/>)
      }

      <Footer />
    </div>

  );
};

export default App;
