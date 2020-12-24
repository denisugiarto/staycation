import React from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;

  return (
    <section className="container">
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Activities</h4>
        <div className="row row-cols-lg-4 row-cols-1">
          {data.map((item, index2) => {
            return (
              <div
                className="col mb-3 mb-lg-0"
                key={`activity-item-${index2}`}
              >
                <Fade bottom delay={300 * index2}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 250 }}>
                      <img
                        src={
                          item.imageUrl
                            ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                            : ""
                        }
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-blok text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">{item.type}</span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
