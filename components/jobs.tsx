import React from 'react';
import PropTypes from "prop-types";

const content = [
    {
        category: "FRONT-END",
        title: "Founding Front-End Engineer",
        date: "12 Jun 2019",
        description: "As a founding 10X front-end engineer you lead the development for all customer facing interfaces. You are a React developer familiar with front-end technologies such as Next JS, Three JS, React Native and D3 JS."
    },
    {
        category: "BACK-END",
        title: "Founding Back-End Engineer",
        date: "12 Jun 2019",
        description: "As a founding 10X back-end engineer you lead the development for all customer facing interfaces. You are proficient in cloud, devops, webserver technologies. Node, Python, and Docker are your bread and butter."
    },
    {
        category: "AI/ML",
        title: "Founding ML Engineer",
        date: "12 Jun 2019",
        description: "As a founding 10X AI/ML engineer you lead the development of generative, retrieval and discriminative machine learning systems."
    }
]

function Item(props: any) {
    const last = props.last;
    return (
        <>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                        {props.content.category}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">{props.content.date}</span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {props.content.title}
                    </h2>
                    <p className="leading-relaxed">
                        {props.content.description}
                    </p>
                    <a href="" className={`text-primary inline-flex items-center mt-4`}>
                        Learn More
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}

function LightBlogD(props: any) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    {content.map((item, key) => (
                        <Item key={key} content={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

LightBlogD.defaultProps = {
    theme: 'indigo'
};

LightBlogD.propTypes = {
    theme: PropTypes.string.isRequired
};

export default LightBlogD;