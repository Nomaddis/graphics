import React, {Component} from 'react';
import './Footer.css'
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-inner">
                <div className="footer-contacts-wrap">
                  <div><span>Національний університет "Львівська політехніка"</span></div>
                  <div><span>Інститут телекомунікацій електроніки та електронної техніки</span></div>
                  <div><span>Кафедра телекомунікацій</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </footer>


      // <div className={classes.Person}>
      // </div>
    )
  }
}

export default Footer;