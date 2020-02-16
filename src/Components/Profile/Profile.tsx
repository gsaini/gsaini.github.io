import * as React from 'react'
import './_Profile.scss'

interface IProps {
    name: string
    company: string
    designation: string
    aboutMe: string
    avatarUrl: string
    emailAddress: string
    mobileNumber: string
    location: string
}

export const Profile: React.FC<IProps> = ({ name, designation, company, aboutMe, emailAddress, mobileNumber, avatarUrl, location }) => {
    return (
        <section className="tile tile-profile">
            <img className="avatar" alt={name} title={name} src={avatarUrl} />
            <h1>{name}</h1>
    <i>{designation} | {company}</i>
            <h4 dangerouslySetInnerHTML={ { __html: aboutMe } }></h4>
            <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            <p><a href={`tel:${mobileNumber}`}>{mobileNumber}</a></p>
            <p>{location}</p>
            <div className="site-links">
                <a rel="noopener noreferrer" href="https://github.com/gsaini" target="_blank"><i className="fab fa-github"></i></a>
                <a rel="noopener noreferrer" href="https://twitter.com/saini_gopal" target="_blank"><i className="fab fa-twitter-square"></i></a>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/gsaini01/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a rel="noopener noreferrer" href="https://www.facebook.com/gops.saini" target="_blank"><i className="fab fa-facebook"></i></a>
                <a rel="noopener noreferrer" href="https://www.instagram.com/gsaini__/" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
        </section>
    );
};
