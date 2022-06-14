import "./Hobby.css";
import $ from "jquery";
import { useTranslation } from "react-i18next";

export default function Hobby() {
  const { t } = useTranslation();
    function onCardOver(elemId){
        var elem = (document).getElementById(elemId);
        var width = $(elem).width();
        var height = $(elem).height();
        $('<div></div>')
            .width(width)
            .height(height)
            .prependTo(elem)
            .addClass('overlay')
            .css('z-index', 100)
    }
    function onCardOut(){
        $('.overlay').remove();
    }

  return (
    <div className="section-component background-dark pb-5">
      <div
        id="Hobby"
        className="container-md mx-4 mt-5 d-flex justify-content-center"
      >
        <div className="row">
          <div className="col-12">
            <h1 className="color-font-white text-center">
              <b>{t('hobby')}</b>
            </h1>
          </div>
          <div className="col-12">
            <p className="text-center">
              {t('hobby_header')}
            </p>
          </div>

          <div className="col-12 col-md-4">
            <div className="card" id="hobby-card-1" onMouseOver={() => onCardOver("hobby-card-1")} onMouseLeave={onCardOut}>
              <div className="card-body">
                <img
                  src={require("../images/MuayThai.jpg")}
                  alt="MuayThai photo"
                  className="card-img-top"
                ></img>
                <h4 className="card-title">Muay Thai</h4>
                <p className="card-text">
                  {t('muay_thai_content')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card" id="hobby-card-2" onMouseOver={() => onCardOver("hobby-card-2")} onMouseLeave={onCardOut}>
              <div className="card-body">
                <img
                  src={require("../images/Bieganie.jpg")}
                  alt="Run image"
                  className="card-img-top"
                ></img>
                <h4 className="card-title">{t('running')}</h4>
                <p className="card-text">
                  {t('running_content')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card" id="hobby-card-3" onMouseOver={() => onCardOver("hobby-card-3")} onMouseLeave={onCardOut}>
              <div className="card-body">
                <img
                  src={require("../images/SciankaWspinaczkowa.jpg")}
                  alt="Run image"
                  className="card-img-top"
                ></img>
                <h4 className="card-title">{t('climbing')}</h4>
                <p className="card-text">
                  {t('climbing_content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
