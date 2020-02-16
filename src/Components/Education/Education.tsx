import * as React from 'react'
import './_Education.scss'

interface EducationState {
    iconCls: string
    year: string
    institute: string
    stream: string
}

interface IProps {
    educations: Array<EducationState>
}

export const Education: React.FC<IProps> = ({ educations }) => {
    return (
        <section className="tile tile-education">
            <div className="tile-content">
                {
                    educations.map(({ iconCls, year, institute, stream }) => {
                        return (
                            <div className="tile-card" key={`tile-card-${year}-${stream}`}>
                                <i className={iconCls}></i>
                                <div className="card-education">
                                    <h3>{institute}</h3>
                                    <p>{stream}</p>
                                    <p>{year}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};
