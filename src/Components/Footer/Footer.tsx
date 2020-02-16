import * as React from 'react'
import './_Footer.scss';

export const Footer: React.FC = () => {
    const date = new Date();
    return (
        <section className="tile tile-footer">
            <div>
                Copyright © 2009 - { date.getFullYear() }, All rights reserved.
            </div>
        </section>
    );
};
