import React from "react";

interface SingleIconProps {
  title: string;
  content: string;
  img: string; // URL or path to the image
}

const SingleIcon: React.FC<SingleIconProps> = ({ title, content, img }) => {
  return (
    <div className=" bg-red-200">
      <img src={img} alt={title} className="icon-image" />
      <h3 className="icon-title">{title}</h3>
      <p className="icon-content">{content}</p>
    </div>
  );
};

export default SingleIcon;
