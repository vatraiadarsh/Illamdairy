import React from "react";

export default function Contact() {
  return (
    <>
      {/* <!-- contact section --> */}
      <section class="contact_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Get In <span>Touch</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-md-6 px-0">
              <div class="form_container">
                <form action="">
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <input
                        type="text"
                        class="message-box form-control"
                        placeholder="Message"
                      />
                    </div>
                  </div>
                  <div class="btn_box">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 px-0">
              <div class="map_container">
                <div class="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end contact section --> */}
    </>
  );
}
