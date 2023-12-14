import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";


function Content({ title, about, img_url, theme }: any) {
    return (
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
                <Image
                    alt="content"
                    src={img_url}
                    width={1204}
                    height={504}
                />
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">
                {title}
            </h2>
            <p className="text-base leading-relaxed mt-2">
                {about}
            </p>
            <a href="" className={`text-${theme}-400 inline-flex items-center mt-3`}>
                Learn More
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    )
}


function DarkContentH(props: any) {
    const status = false;
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col">
                    {
                        status
                            ?
                            (
                                <div className="h-1 bg-gray-800 rounded overflow-hidden">
                                    <div className={`w-24 h-full bg-${props.theme}-500`}></div>
                                </div>
                            )
                            :
                            (
                                null
                            )
                    }
                    <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                            Explore Our Offerings 🦾
                        </h1>
                        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                            The Analytics Club offers events in various formats and a number of interest groups in different topics.
                            So, whatever interests you in data science interests, you are sure to find an event or group in your niche.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <Content title={"Hackathons"} about={"Explore how we can help you gain experience with our hackathons Data Days and Hack4Good."} img_url={"/hack4good.jpg"} theme={props.theme} />
                    <Content title={"Events"} about={"Explore our evening events such as our workshops, keynotes, and many other events!"} img_url={"/datadays.jpeg"} theme={props.theme} />
                    <Content title={"Groups"} about={"Explore our special interest groups such as the Quant Club or the Analytics Club's committees."} img_url={"/quant.jpg"} theme={props.theme} />
                </div>
            </div>
        </section>
    );
}

DarkContentH.defaultProps = {
    theme: 'indigo'
};

DarkContentH.propTypes = {
    theme: PropTypes.string.isRequired
};

export default DarkContentH;