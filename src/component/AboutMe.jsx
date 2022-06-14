import "./AboutMe.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  const [actualTab, actualTabSet] = useState("tab-1-skils");

  function tabClick(elementId) {
    const elements = document.querySelectorAll(".tab-dark");

    elements.forEach((element) => {
      if (element.classList.contains("active-tab-link")) {
        element.classList.remove("active-tab-link");
      }
    });

    let element = document.getElementById(elementId);
    element.classList.add("active-tab-link");
    actualTabSet(elementId);
  }

  function contentTab() {
    if (actualTab === "tab-1-skils") {
      return (
        <div>
          <p>
            {t('ability_content')}
          </p>
        </div>
      );
    }
    if (actualTab === "tab-2-work") {
      return (
        <div>
          <p>
            {t('experience_content')}
          </p>
        </div>
      );
    }
    if (actualTab === "tab-3-education") {
      return (
        <div>
          <p>
            {t('education_content')}
          </p>
        </div>
      );
    }

    return <></>;
  }

  return (
    <div className="section-component">
      <div id="AboutMe" className="container-md mx-4 mt-5">
        <div className="row">
          <div className="col-lg-5">
            <img
              src={require("../images/myPhoto.jpg")}
              alt="My photo"
              className="image my-image"
            ></img>
          </div>
          <div className="col-lg-7">
            <h1 className="color-font-white">
              <b>{t('about_me')}</b>
            </h1>
            <p>
              {t('about_me_content')}
            </p>
            <ul className="nav justify-content-start ul-about-me mt-5 mb-3 ">
              <li
                className="tab-dark active-tab-link"
                id="tab-1-skils"
                onClick={() => tabClick("tab-1-skils")}
              >
                {t('ability')}
              </li>
              <li
                className="tab-dark"
                id="tab-2-work"
                onClick={() => tabClick("tab-2-work")}
              >
                {t('experience')}
              </li>
              <li
                className="tab-dark"
                id="tab-3-education"
                onClick={() => tabClick("tab-3-education")}
              >
                {t('education')}
              </li>
            </ul>
            <div>{contentTab()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
