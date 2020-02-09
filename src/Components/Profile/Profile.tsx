import * as React from 'react'
import './_Profile.scss'

interface IProps {
    name: string
    aboutMe: string
    avatarUrl: string
    emailAddress: string
    mobileNumber: string
}

export const Profile: React.FC<IProps> = ({ name, aboutMe, emailAddress, mobileNumber, avatarUrl }) => {
    return (
        <section className="tile tile-profile">
            <img className="avatar" alt={name} title={name} src={avatarUrl} />
            <h1>{name}</h1>
            <h4>{aboutMe}</h4>
            <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            <p><a href={`tel:${mobileNumber}`}>{mobileNumber}</a></p>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
      </section>
    );
};
