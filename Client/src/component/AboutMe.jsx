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
          <h5>{t('ability1')}</h5>
          <h5>{t('ability2')}</h5>
          <h5>{t('ability3')}</h5>
          <h5>{t('ability4')}</h5>
          <h5>{t('ability5')}</h5>
        </div>
      );
    }
    if (actualTab === "tab-2-work") {
      return (
        <div>
          <h4><b>{t('experiance_company1')}</b></h4>
          <h5>{t('experiance_company1_dat')}</h5>
          <p>{t('experiance_company1_desc')}</p>
          <h4><b>{t('experiance_company2')}</b></h4>
          <h5>{t('experiance_company2_dat')}</h5>
          <p>{t('experiance_company2_desc')}</p>
        </div>
      );
    }
    if (actualTab === "tab-3-education") {
      return (
        <div>
          <h4><b>{t('education_hight_school')}</b></h4>
          <h5>{t('education_hight_school_date')}</h5>
          <h4><b>{t('education_sggw')}</b></h4>
          <h5>{t('education_sggw_date')}</h5>
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
            <ul className="nav justify-content-start ul-about-me mt-5 mb-4">
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
