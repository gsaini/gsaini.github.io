import * as React from "react";
import "./_Timeline.scss";

interface IProps {
  title: string
  bgColor: string
  timelines: Array<{ year: number; designation: string, projects: Array<{ name: string, techStack: string, description: string }> }>;
}

export const Timeline: React.FC<IProps> = tile => {
  // var randomColor = Math.floor(Math.random()*16777215).toString(16); // style={{ backgroundColor: `#${randomColor}` }}

  return (
    <section className="tile tile-timeline">
      {tile.title ? <h3 className="tile-title">{tile.title}</h3> : null}
      <div className="tile-content">
        {tile.timelines.map((timeline: any, idx: number) => {
          return [
            <div className={idx === 0 ? 'tile-card card-01' : 'tile-card card-02'} key={`tile-card-${timeline.year}`}>
              <div className="empty-container"></div>
              <h3 className="card-header">{timeline.year}</h3>
              {timeline.designation ? <h4>{timeline.designation}</h4> : null}
              {
                timeline.projects.map((project: any) => {
                  return (<div className="card-project" key={`card-project-${project.name}`}>
                    <p>{project.name}</p>
                    <i>{project.techStack}</i>
                    <div dangerouslySetInnerHTML={ { __html: project.description } }></div>
                  </div>)
                })
              }
            </div>
          ];
        })}
      </div>
    </section>
  );
};
