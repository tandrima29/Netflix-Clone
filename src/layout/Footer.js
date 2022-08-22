import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div class="text-secondary bg-dark footer-backpadding">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row  */}
          <div class="row mt-3">
            {/* Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content --> */}
              <p>
                <span class="cursor">Audio Description</span>
              </p>
              <p>
                <span class=" cursor">Investor Relations</span>
              </p>
              <p>
                <span class=" cursor">Legal Notices</span>
              </p>
            </div>
            {/* Grid column --> */}

            {/* Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links --> */}

              <p>
                <span
                  class="
                cursor"
                >
                  Help Centre
                </span>
              </p>
              <p>
                <span class="cursor">Jobs</span>
              </p>
              <p>
                <span class=" cursor">Cookie Preferences</span>
              </p>
            </div>
            {/* Grid column --> */}

            {/* Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links --> */}

              <p>
                <span class="cursor">Gift Cards</span>
              </p>
              <p>
                <span class="cursor">Terms of Use</span>
              </p>
              <p>
                <span class=" cursor">Corporate Information</span>
              </p>
            </div>
            {/* Grid column --> */}

            {/* Grid column --> */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
              {/* Links --> */}

              <p>
                <span class=" cursor">Media Centre</span>
              </p>
              <p>
                <span class=" cursor">Privacy</span>
              </p>
              <p>
                <span class="cursor">Contact Us</span>
              </p>
            </div>
            {/* Grid column --> */}
          </div>
          {/* Grid row --> */}
        </div>
      </div>
      {/* Section: Links  --> */}

      {/* Copyright --> */}
      <div class="text-secondary bg-dark copy-right">
        © 1997-2022 Netflix, Inc.
      </div>
      {/* {/* Copyright  */}
    </footer>
  );
}
