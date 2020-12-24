import React from 'react'
import Fade from "react-reveal/Fade"

import Breadcrumb from "elements/Breadcrumb"

export default function PageDetailTitle({ data, breadcrumb }) {
        return (
            <section className="container">
                <Fade bottom>
                    <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                        <div className="col-lg-3">
                            <Breadcrumb data={breadcrumb} />
                        </div>
                        <div className="col text-center">
                            <h1 className="h2">{data.title}</h1>
                            <span className="text-gray-400">
                                {data.city}, {data.country}
                            </span>
                        </div>
                        <div className="col"></div>
                    </div>
                </Fade>
            </section>
        );
}
