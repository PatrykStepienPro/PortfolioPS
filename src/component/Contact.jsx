import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact() {
  return (
    <div className="section-component">
      <div className="row row-full-width">
        <div className="col-12 d-flex justify-content-center">
          <div
            id="Contact"
            className="container-md mx-4 d-flex justify-content-left"
          >
            <div className="row row-full-width">
              <div className="col-12">
                <h1 className="color-font-white text-center d-flex justify-content-center">
                  <b>Contact</b>
                </h1>
                <div className="col-6">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label input-contact-label"
                      >
                        Twoje imie *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Imie"
                        id="name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label input-contact-label"
                      >
                        Twój adres email *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="subject"
                        className="form-label input-contact-label"
                      >
                        Temat *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Temat"
                        id="subject"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="content"
                        className="form-label input-contact-label"
                      >
                        Treść *
                      </label>
                      <textarea
                        className="form-control"
                        id="content"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 background-dark pa-0">
          <div className="d-flex justify-content-center footer-content">
                <a href="https://www.facebook.com" className="mx-4"><i className="fa-brands fa-facebook-square fa-3x iconPrimaryColor"></i></a>
                <a href="https://twitter.com" className="mx-4"><i className="fa-brands fa-twitter-square fa-3x iconPrimaryColor"></i></a>
                <a href="https://www.linkedin.com/in/patryk-st%C4%99pie%C5%84-879b8a239/" className="mx-4"><i className="fa-brands fa-linkedin fa-3x iconPrimaryColor"></i></a>
                <a href="https://www.instagram.com/" className="mx-4"><i className="fa-brands fa-instagram-square fa-3x iconPrimaryColor"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
