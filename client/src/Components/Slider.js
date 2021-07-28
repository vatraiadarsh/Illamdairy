import React from "react";

export default function Slider() {
  return (
    <>
      {/* <!-- slider section --> */}
      <section class="slider_section ">
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container ">
                <div class="row">
                  <div class="col-md-6 col-lg-5">
                    <div class="detail-box">
                      <h1>
                        We Sell The <br />
                        Best Dairy Products
                      </h1>
                      <p>
                        I am Alisha Oli. A professonial ghee and Dairy Products
                        maker from my own hand with so much love and affection I
                        do my best to make a good ghee.{" "}
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn-1">
                          Read More
                        </a>
                        <a href="" class="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-7">
                    <div class="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-6 col-lg-5">
                    <div class="detail-box">
                      <h1>
                        We Sell The <br />
                        Best Dairy Products
                      </h1>
                      <p>
                        I am Alisha Oli. A professonial ghee and Dairy Products
                        maker from my own hand with so much love and affection I
                        do my best to make a good ghee.{" "}
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn-1">
                          Read More
                        </a>
                        <a href="" class="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-7">
                    <div class="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container ">
                <div class="row">
                  <div class="col-md-6 col-lg-5">
                    <div class="detail-box">
                      <h1>
                        We Sell The <br />
                        Best Dairy Products
                      </h1>
                      <p>
                        I am Alisha Oli. A professonial ghee and Dairy Products
                        maker from my own hand with so much love and affection I
                        do my best to make a good ghee.{" "}
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn-1">
                          Read More
                        </a>
                        <a href="" class="btn-2">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-7">
                    <div class="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol class="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </section>
      {/* <!-- end slider section --> */}
    </>
  );
}
