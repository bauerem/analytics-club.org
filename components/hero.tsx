import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Button } from "./ui/button";

function LightHeroA(props: any) { // TODO: add proper type from below later!! // improve your interior in minutes.
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Create interior designs<br className="lg:inline-block" />
                        in only minutes!
                    </h1>
                    <p className="mb-8 leading-relaxed text-base">
                        Upload a photo of a room to our interior design AI, and receive super-human advice on how to style your home.
                    </p>
                    <div className="flex justify-center">
                        <div className="py-2 text-base">
                            <Button
                                className="p-7"
                                variant={"secondary"}>Demo Video</Button>
                        </div>
                        <div className="py-2 px-6 text-base">
                            <Button
                                className="p-7  bg-gradient-to-r from-secondary to-primary"
                            >Get Started</Button>
                        </div>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        alt="Hero"
                        src={"/hero.png"}
                        width={800}
                        height={800}
                    />
                </div>
            </div>
        </section>
    );
}

LightHeroA.defaultProps = {
    theme: 'indigo'
};

LightHeroA.propTypes = {
    theme: PropTypes.string.isRequired
};

export default LightHeroA;