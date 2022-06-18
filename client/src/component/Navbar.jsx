import "./Navbar.css";
import $ from "jquery";
import React, { Component }  from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import Cookies from "js-cookie";

const languges = [
  {
    code: "pl",
    name: "Polski",
    country_code: "pl",
  },
  {
    code: "en",
    name: "Angielski",
    country_code: "gb",
  },
];

export default function Navbar() {
  const currentLanguage = Cookies.get('i18next') || 'en';
  const { t } = useTranslation();
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <strong>Portfolio</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#AboutMe">
                    {t('about_me')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Hobby">
                    {t('hobby')}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    {t('contact')}
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn button-transparent"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-globe fa-2x icon-white"></i>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li><span className="dropdown-item-text">{t('language')}</span></li>
                      {languges.map(({ code, name, country_code }) => (
                        <li key={country_code}>
                          <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)} disabled={code === currentLanguage}>
                            <span className={`flag-icon flag-icon-${country_code} mx-2`} style={{opacity: code === currentLanguage ? 0.5:1}}></span>
                            {name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="view intro-2">
          <div className="full-bg-img">
            <div className="mask rgba-purple-light flex-center">
              <div className="container text-center white-text wow fadeInUp"></div>
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
