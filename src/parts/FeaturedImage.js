import React from "react";
import Fade from "react-reveal/Fade";
export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-lg-3">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className="col mb-3 mb-lg-0"
            >
              <Fade bottom delay={300 * index}>
                <div className="card">
                  <figure className="img-wrapper">
                    <img src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`} alt={item._id} className="img-cover" />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
