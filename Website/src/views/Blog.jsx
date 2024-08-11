import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { Blogs } from "../constants";

const Blog = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            id="blog"
            className={
                darkMode
                    ? "bg-gray-100 pt-24 md:h-screen"
                    : "bg-black pt-24 text-white md:h-screen"
            }
        >
            <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0 mb-5">
          My Articles 
        </h2>
            <div className="container-md my-0 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-3 px-3">
                {Blogs.map((el) => (
                    <div class="py-5 px-10 w-full bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <a href="helo">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                               {el.name}
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {el.description}
                        </p>
                        <a
                            href={el.link}
                            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Read More
                            
                            <svg
                                class="ml-2 -mr-1 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                ))}


            </div>


        </div>
    );
};

export default Blog;