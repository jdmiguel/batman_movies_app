import React from "react";
import Link from "next/link";

interface IThumbProps {
  title: string;
  imageSrc: string;
}

const Thumb: React.FC<IThumbProps> = ({ title, imageSrc }) => (
  <div>
    <img src={imageSrc} />
    <h2>{title}</h2>
    <Link href="">
      <a>Show detail</a>
    </Link>
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
        margin: 0 0 0.4em 0;
        font-size: 1.7em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;
        text-align: center;
      }
      a {
        font-size: 1em;
        text-transform: uppercase;
        color: #727272;
        text-decoration: none;
        padding: 0.5em;
        border-radius: 0.2em;
        transition: all 0.35s linear;
        font-weight: 600;
      }
      a:hover {
        font-size: 1em;
        color: #242424;
        background: #e0e0e0;
      }
    `}</style>
  </div>
);

export default Thumb;
