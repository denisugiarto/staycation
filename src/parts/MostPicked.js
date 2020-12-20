import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="row row-cols-lg-3 row-cols-1">
          {props.data.map((item) => {
            return (
              <div
                key={`mostpicked-${item}`}
                className="col"
              >
                <Fade bottom delay={500}>
                  <div className="card">
                    <figure>
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">
                        {" "}
                        per {item.unit}
                      </span>
                    </div>
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                            : ""
                        }
                        alt={item.title}
                        className="img-fluid"
                        style={{width:"350px", height:"350px", objectFit: "cover", borderRadius:"1em"}}
                      />
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                        >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                        </figure>
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
