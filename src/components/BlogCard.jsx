import React from "react";
import placeholderImg from "../assets/404.jpg";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log(blog);
  const { id, cover_image, title, description, published_at } = blog;
  return (
    <div>
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group transition border-2 border-pink-300 rounded-md hover:scale-105 hover:border-pink-600 border-opacity-30 hover:no-underline focus:no-underline hidden sm:block"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
