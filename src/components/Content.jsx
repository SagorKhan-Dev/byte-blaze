import React from "react";
import placeholderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, tags, body_html } = blog;
  return (
    <div
      rel="noopener noreferrer"
      className="mx-auto group p-2 rounded-md hover:no-underline focus:no-underline hidden sm:block"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-60 bg-gray-500"
        src={cover_image || placeholderImg}
      />

      <div>
        <div className="flex flex-wrap py-6 gap-2">
          {tags.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <div>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
