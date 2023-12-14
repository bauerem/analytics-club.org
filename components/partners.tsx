import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Partner({ name, subtitle, about, img_url, theme, invert }: any) {
    return (
        <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative">
                <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={img_url}
                    width={601}
                    height={361}
                    style={invert && {
                        filter: 'invert(100%)'
                    }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className={`tracking-widest text-sm title-font font-medium text-${theme}-400 mb-1`}>
                        {subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {name}
                    </h1>
                    <p className="leading-relaxed">
                        {about}
                    </p>
                </div>
            </div>
        </div>
    )
}


function DarkPartnersC(props: any) {
    return (
        <section className="text-gray-400 body-font">
            {/*
                PLATINUM PARTNERS
            */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-xl text-2xl font-medium title-font mb-4 text-white">
                        Platinum Partners 👏
                    </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Partner name={"D-One"} subtitle={"Consulting"} img_url={"/done.png"} about={"D-One is a data consulting company"} theme={props.theme} invert />
                    <Partner name={"Pic Nic"} subtitle={"E-Commerce"} img_url={"/picnic.png"} about={"Picnic is a Dutch online supermarket"} theme={props.theme} invert />
                    <Partner name={"Quantco"} subtitle={"Consulting"} img_url={"/quantco.png"} about={"QuantCo combines data science and technology to provide business solutions"} theme={props.theme} invert />
                    <Partner name={"Bearing Point"} subtitle={"Consulting"} img_url={"/bearingpoint.png"} about={"BearingPoint is a management and technology consulting firm"} theme={props.theme} invert />
                </div>
            </div>
            {/*
                GOLD PARTNERS
            */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-xl text-2xl font-medium title-font mb-4 text-white">
                        Gold Partners 🙏
                    </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Partner name={"Credit Suisse"} subtitle={"Banking"} img_url={"/creditsuisse.png"} about={"D-One is a data consulting company"} theme={props.theme} invert />
                    <Partner name={"Absci"} subtitle={""} img_url={"/absci.png"} about={""} theme={props.theme} />
                    <Partner name={"Quantum Black"} subtitle={""} img_url={"/quantumblack.png"} about={""} theme={props.theme} invert />
                    <Partner name={"Visium"} subtitle={""} img_url={"/visium.png"} about={""} theme={props.theme} invert />
                    <Partner name={"AWS"} subtitle={""} img_url={"/aws.png"} about={""} theme={props.theme} invert />
                    <Partner name={"Optiver"} subtitle={""} img_url={"/optiver.png"} about={""} theme={props.theme} invert />
                    <Partner name={"G Research"} subtitle={""} img_url={"/gresearch.png"} about={""} theme={props.theme} invert />
                </div>
            </div>
            {/*
                SILVER PARTNERS
            */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="sm:text-xl text-2xl font-medium title-font mb-4 text-white">
                        Silver Partners 👍
                    </h2>
                </div>
                <div className="flex flex-wrap -m-4">
                    <Partner name={"Zuehlke"} subtitle={""} img_url={"/zuehlke.png"} about={""} theme={props.theme} />
                </div>
            </div>
        </section>
    );
}

DarkPartnersC.defaultProps = {
    theme: 'indigo'
};

DarkPartnersC.propTypes = {
    theme: PropTypes.string.isRequired
};

export default DarkPartnersC;