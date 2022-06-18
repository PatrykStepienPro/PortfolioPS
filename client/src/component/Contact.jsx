import "./Contact.css";
import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { toast, ToastContainer }from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Contact() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [nameUser, setnameUser] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(!email || !subject || !message || !nameUser)
    {
      return toast.error('Please fill name, emial, subject and message');
    }
    try{
      setLoading(true);
      const{data} = await axios.post(`/api/emial`,{
        nameUser,
        email,
        subject,
        message
      });
      setLoading(false);
      toast.success(data.message);
    }catch(err){
      setLoading(false);
      toast.error(
        err.response && err.response.data.message 
        ? err.response.data.message
        : err.message
      );
    }
  }

  return (
    <div className="section-component">
      <ToastContainer position="bottom-center"></ToastContainer>
      <div className="row row-full-width">
        <div className="col-12 d-flex justify-content-center">
          <div
            id="Contact"
            className="container-md mx-4 d-flex justify-content-left"
          >
            <div className="row row-full-width">
              <div className="col-12">
                <h1 className="color-font-white text-center d-flex justify-content-center">
                  <b>{t('contact')}</b>
                </h1>
                <div className="col-6">
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label
                        htmlFor="name"
                        className="form-label input-contact-label"
                      >
                        {t('label_name')} *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder={`${t('placeholder_name')}`}
                        id="nameUser"
                        onChange={(e) => setnameUser(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="email"
                        className="form-label input-contact-label"
                      >
                        {t('label_email')} *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder={`${t('placeholder_email')}`}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="subject"
                        className="form-label input-contact-label"
                      >
                        {t('label_subject')} *
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder={`${t('placeholder_subject')}`}
                        id="subject"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="content"
                        className="form-label input-contact-label"
                      >
                        {t('label_content')} *
                      </label>
                      <textarea
                        className="form-control"
                        id="content"
                        rows="3"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="float-end mb-3">
                    <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>{loading ? t('formButtonSending') : t('formButtonSend')}</button>
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
