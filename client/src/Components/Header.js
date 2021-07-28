import React from "react";

export default function Header() {
  return (
    <>
      {/* <!-- header section strats --> */}
      <header class="header_section">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="">
              <span>Illam Dairy</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    {" "}
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Fruits
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* <!-- end header section --> */}
    </>
  );
}
