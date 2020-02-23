import React from "react";

interface IThumbProps {
  title: string;
}

const Thumb: React.FC<IThumbProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Thumb;
