import React from 'react';

function Footer() {

    return(
        <React.Fragment>
          <footer className="page-footer blue darken-3">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Loud Packs</h5>
                  <h6 className="white-text">Canada Office</h6>
                  <p className="grey-text text-lighten-4">
                    Serving the GTA area for years <br />
                    <a className="white-text" href="mailto:info@loudpacks.ca">info@loudpacks.ca</a>
                  </p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Links</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="/catalog">Catalog</a></li>
                    <li><a className="grey-text text-lighten-3" href="/about-us">About Us</a></li>
                    <li><a className="grey-text text-lighten-3" href="/ar-view">AR</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container center-align">
              © 2019 Loud Packs
              </div>
            </div>
          </footer>
        </React.Fragment>
    )
}

export default Footer;