import Button from "elements/Button";
import React from "react";
import Fade from "react-reveal/Fade";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.lenght === 0 ? (
              <div className="row">
                <div className="col-auto align-item-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <Fade bottom delay={100 * index2}>
                    <div
                      className="item column-3 row-1"
                      key={`category-${index1}-item-${index2}`}
                    >
                      <div className="card">
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>{" "}
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="stretched-link d-block tex-gray-800"
                          >
                            <h5 className="h4">{item.name}</h5>
                            <span className="text-gray-500">
                              {item.country}
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
