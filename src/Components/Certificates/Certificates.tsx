import * as React from 'react';
import credlyDashboard from './credlyDashboard.png';
import './_Certificates.scss';


export const Certificates: React.FC = () => {
    return (
        <section className="tile tile-certificates">
            <h3 className="tile-certificates-title">My AWS Certificates</h3>
            <a href='https://www.credly.com/users/gsaini/badges' target="_blank" rel='noreferrer'>
                <img src={credlyDashboard} width="100%" alt='My Certificates'/>
            </a>
        </section>
    );
};
