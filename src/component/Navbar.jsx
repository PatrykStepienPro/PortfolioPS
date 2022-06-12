import "./Navbar.css";
import $ from "jquery";


export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark x-navbar">
          <div className="container-fluid">
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <strong>Portfolio</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#AboutMe">
                    O mnie
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Hobby">
                    Zainteresowania
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="view intro-2">
          <div className="full-bg-img">
            <div className="mask rgba-purple-light flex-center">
              <div className="container text-center white-text wow fadeInUp">

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


$(window).scroll(function () {
  if ($(this).scrollTop() > 350) {
    $(".x-navbar").addClass("x-navbar-fixed-top");
  } else {
    $(".x-navbar").removeClass("x-navbar-fixed-top");
  }
});
