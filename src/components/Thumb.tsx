import React, { Fragment } from "react";

interface IThumbProps {
  title: string;
  imageSrc: string;
}

const Thumb: React.FC<IThumbProps> = ({ title, imageSrc }) => (
  <div>
    <img src={imageSrc} />
    <h2>{title}</h2>
    <span>view detail</span>
    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 3em 0;
        background: #efefef;
        margin-bottom: 2em;
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
        border-radius: 0.5em;
      }
      img {
        box-shadow: 1px 1px 7px 0px rgba(0, 0, 0, 0.55);
        margin-bottom: 2em;
      }
      h2 {
        color: #242424;
        margin: 0;
        font-size: 1.7em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;
        text-align: center;
      }
      span {
      }
    `}</style>
  </div>
);

export default Thumb;
