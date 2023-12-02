import React from "react";
import PropTypes from "prop-types";
import Logo from "./logo";

function LightFooterD(props: any) { // TODO: add proper type from below later!!

    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href={""} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Logo />
                    <span className="ml-3 text-xl">InterAI</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © 2023 InterAI
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href={""} className="ml-3 text-gray-500">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </a>
                    <a href={""} className="ml-3 text-gray-500">
                        <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            />
                            <circle cx="4" cy="4" r="2" stroke="none" />
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    );
}

LightFooterD.defaultProps = {
    theme: 'indigo'
};

LightFooterD.propTypes = {
    theme: PropTypes.string.isRequired
};

export default LightFooterD;