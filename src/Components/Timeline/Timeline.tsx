import * as React from "react";
import "./_Timeline.scss";

interface IProps {
  title: string
  bgColor: string
  timelines: Array<{ year: number; description: string }>;
}

export const Timeline: React.FC<IProps> = tile => {
  // var randomColor = Math.floor(Math.random()*16777215).toString(16); // style={{ backgroundColor: `#${randomColor}` }}

  return (
    <section className="tile tile-timeline" style={{ backgroundColor: tile.bgColor }}>
        { tile.title ? <h2 className="title">{tile.title}</h2> : null }
      <div className="wrapper">
        {tile.timelines.map((timeline: any, idx: number) => {
          return [
            <div className={ idx === 0 ? 'top' : 'bottom' }>
              <h2>{timeline.year}</h2>
              <p>{timeline.description}</p>
            </div>,
            idx === 0 ? <div className="vertical-line"></div> : null
          ];
        })}
      </div>
    </section>
  );
};
