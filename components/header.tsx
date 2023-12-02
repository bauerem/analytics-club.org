import React from "react";
import PropTypes from "prop-types";
import { Button } from "./ui/button";
import Logo from "./logo";

function LightHeaderA(props: any) { // TODO: add proper type from below later!!

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap px-5 py-10 flex-col md:flex-row items-center">
                <a href={""} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Logo />
                    <span className="ml-3 text-xl">InterAI</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a href={"/about"} className="mr-5 hover:text-gray-900">About</a>
                    <a href={"/jobs"} className="mr-5 hover:text-gray-900">Jobs</a>
                    <a href={"/login"} className="mr-5 hover:text-gray-900">Login</a>
                </nav>
                <div className="py-1 px-3">
                    <Button
                        className="text-base bg-gradient-to-r from-secondary to-primary"
                    >
                        Get Started
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Button>
                </div>
            </div>
        </header>
    );
}

LightHeaderA.defaultProps = {
    theme: 'indigo'
};

LightHeaderA.propTypes = {
    theme: PropTypes.string.isRequired
};

export default LightHeaderA;