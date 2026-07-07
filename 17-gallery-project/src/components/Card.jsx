import React from "react";

const Card = ({ elem }) => {
  return (
    <a
      href={elem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="w-56 h-44 overflow-hidden rounded-xl">
        <img
          src={elem.download_url}
          alt={elem.author}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h2 className="mt-2 text-lg font-bold truncate">{elem.author}</h2>
    </a>
  );
};

export default Card;
