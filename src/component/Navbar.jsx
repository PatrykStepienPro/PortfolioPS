import "./Navbar.css";
import $ from 'jquery';

function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <strong>Portfolio</strong>
                  </a>
                </li>
                <li class="nav-item">
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


  $(window).scroll( function() {
  
  if ( $(this).scrollTop() > 0 ) {
  
  $('.x-navbar').addClass( 'x-navbar-fixed-top' );
  
  } else {
  
  $('.x-navbar').removeClass( 'x-navbar-fixed-top' );
  
  }
  
  });
