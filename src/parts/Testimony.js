import React from "react";
import TestimonialAccent from "assets/images/testimonial-landingpages-frame.png";
import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 55 }}>
          <div
            className="testimonial-hero"
            style={{
              margin: `30px 0 0 30px`,
            }}
          >
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{
                borderRadius: "15px 15px 100px 15px",
                zIndex: 1,
              }}
            />
            <div className="position-absolute testimonial-accent"></div>
          </div>
        </div>
        <div className="col" style={{ width: "max-content" }}>
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 font-weight-leight line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40, height: 50 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
