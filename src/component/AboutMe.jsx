import "./AboutMe.css";
import React, { useState } from "react";

export default function AboutMe() {
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
            Fusce egestas hendrerit velit sit amet scelerisque. Nunc ut lorem id
            dolor commodo tristique ullamcorper ac est. Mauris sed magna
            sodales, iaculis nibh nec, iaculis libero. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Nulla ultricies nibh id lectus blandit cursus. Quisque eu magna ac
            risus tincidunt eleifend vitae ac neque. Sed nisi magna, bibendum
            consequat ex pharetra, facilisis vulputate ligula.
          </p>
        </div>
      );
    }
    if (actualTab === "tab-2-work") {
      return (
        <div>
          <p>
            Phasellus finibus nisl vel metus porta, in bibendum erat commodo.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut
            placerat lacus. Duis at est tempus, pellentesque quam nec, luctus
            orci. Sed interdum erat id porta placerat. Phasellus et sapien
            risus. Morbi consequat sed lorem vel egestas. In pulvinar urna non
            erat tempus accumsan at sed massa. Aliquam porta at eros id aliquam.
            Nullam a odio sit amet est rhoncus lobortis. Aenean et tempus
            tortor, sit amet mattis quam. Maecenas volutpat purus sit amet
            lectus mattis fringilla.
          </p>
        </div>
      );
    }
    if (actualTab === "tab-3-education") {
      return (
        <div>
          <p>
            Mauris maximus, nibh sed blandit dapibus, est purus egestas lacus,
            quis condimentum dui velit nec elit. Cras tristique elit quis lorem
            aliquet pulvinar. Aliquam fermentum tempus nulla at ullamcorper.
            Nullam nec odio vel ante semper sodales quis nec ligula. Ut erat
            leo, ultrices eu tortor maximus, placerat accumsan lorem. Quisque
            lorem velit, facilisis at vulputate in, viverra et purus. Praesent
            in mi sed purus mattis aliquam sed et diam. Ut dictum pulvinar enim
            vel lacinia.
          </p>
        </div>
      );
    }

    return <></>;
  }

  return (
    <>
      <div id="AboutMe" className="container-md mx-4 mt-5">
        <div className="row">
          <div className="col-lg-5">
            <img
              src={require("./myPhoto.jpg")}
              alt="My photo"
              className="image my-image"
            ></img>
          </div>
          <div className="col-lg-7">
            <h1 className="color-font-white">
              <b>O mnie</b>
            </h1>
            <p>
              Aliquam eget turpis justo. Cras posuere est lobortis, feugiat
              lacus vel, aliquet nisi. Quisque tincidunt odio nec arcu varius,
              non convallis tellus scelerisque. Ut eu lectus et eros lacinia
              fermentum. Nam ut ullamcorper lacus. Vestibulum sit amet felis ut
              justo eleifend finibus finibus vitae sapien. Mauris euismod
              elementum hendrerit. Etiam feugiat est ac nulla faucibus sodales.
              Sed quam dolor, gravida eu vehicula sit amet, tristique ut sem.{" "}
            </p>
            <ul className="nav justify-content-start ul-about-me mt-5 mb-3 ">
              <li
                className="tab-dark active-tab-link"
                id="tab-1-skils"
                onClick={() => tabClick("tab-1-skils")}
              >
                Umiejętności
              </li>
              <li
                className="tab-dark"
                id="tab-2-work"
                onClick={() => tabClick("tab-2-work")}
              >
                Doświadczenie
              </li>
              <li
                className="tab-dark"
                id="tab-3-education"
                onClick={() => tabClick("tab-3-education")}
              >
                Edukacja
              </li>
            </ul>
            <div>{contentTab()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
