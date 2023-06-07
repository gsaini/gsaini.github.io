import * as React from 'react';
import './_Skills.scss';

export const Skills = ({ skills }: { skills: Array<string> }) => {
    return (
        <section className="tile tile-skills">
            <h3>Skills & Expertise</h3> 
            <div className="tags">
                {
                    skills.map((skill, idx) => {
                        return <div key={`skill-${idx}`}>{skill}</div>
                    })
                }
            </div>
        </section>
    );
};
