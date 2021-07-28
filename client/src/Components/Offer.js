import React from "react";

export default function Offer() {
  return (
    <>
      {/* <!-- offer section --> */}

      <section class="offer_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-7 px-0">
              <div class="box offer-box1">
                <img src="images/o1.jpg" alt="" />
                <div class="detail-box">
                  <h2>Upto 20% Off</h2>
                  <a href="">Shop Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-5 px-0">
              <div class="box offer-box2">
                <img src="images/o2.jpg" alt="" />
                <div class="detail-box">
                  <h2>Upto 10% Off</h2>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div class="box offer-box3">
                <img src="images/o3.jpg" alt="" />
                <div class="detail-box">
                  <h2>Upto 15% Off</h2>
                  <a href="">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end offer section --> */}
    </>
  );
}
