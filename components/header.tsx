import React from "react";
import PropTypes from "prop-types";
import { Button } from "./ui/button";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import MobileSidebar from "./mobile-sidebar";

import Link from 'next/link';
import Image from 'next/image';
import Branding from "./branding";



function LightHeaderA(props: any) { // TODO: add proper type from below later!!

    const textColor = 'gray-300';
    const hoverTextColor = 'white';

    return (
        <header className={`text-${textColor} body-font`}>
            <div className="container mx-auto flex flex-wrap px-5 py-10 flex-row items-center justify-between">
                <Branding />
                <div className={`md:hidden text-${textColor} hover:text-${hoverTextColor}`}>
                    <MobileSidebar />
                </div>
                <div className="hidden md:block">
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <NavMenu />
                        <div className="py-1 px-3">
                            <Button
                                className="text-base bg-gradient-to-r from-secondary to-tertiary"
                            >
                                Join us
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
                    </nav>
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