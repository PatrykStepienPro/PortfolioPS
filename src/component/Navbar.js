import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
          <a class="navbar-brand" href="#">
            <strong>Navbar</strong>
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
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#AboutMe">
                    O mnie
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Hobby">
                    Zainteresowania
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Contact">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="view intro-2">
        <div class="full-bg-img">
            <div class="mask rgba-purple-light flex-center">
                <div class="container text-center white-text wow fadeInUp">
                    <h2>This Navbar is fixed and transparent</h2>
                </div>
            </div>
        </div>
    </div>
      </header>
    </>
  );
}

export default Navbar;
