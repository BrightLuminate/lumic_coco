import React from 'react';
import {
  RiMap2Line,
  RiUser3Line,
  RiMailLine,
  RiBook2Line
} from "react-icons/ri";
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>
      <p className="contact-intro">
       새로운 세계를 창조하는 VFX 합성의 최전선에서, 독보적인 기술력과 예술적 감각으로 귀사의 비전에 <br />
       압도적인 결과물을 선사하겠습니다.
      </p>

      <div className="contact-container container grid">
        {/* Contact Information */}
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon"><RiMap2Line /></span>
            <div>
              <h3 className="contact-title">주소</h3>
              <p className="contact-data">대한민국, 서울</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon"><RiUser3Line /></span>
            <div>
              <h3 className="contact-title">Junior VFX Compositor</h3>
              <p className="contact-data">
                Keying, Rotoscoping, Tracking, Clean-up, Color Matching 중심의 VFX 합성 작업
              </p>
            </div> 
          </div>

          <div className="contact-card">
            <span className="contact-icon"><RiMailLine /></span>
            <div>
              <h3 className="contact-title">이메일</h3>
              <a href="mailto:grace71394@gmail.com" className="contact-data">
                grace71394@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon"><RiBook2Line /></span>
            <div>
              <h3 className="contact-title">휴대폰</h3>
           
              <p className="contact-data">지원 관련 문의 시 이메일로 제공</p>
            </div>
          </div>
        </div>

    

      </div>
    </section>
  );
};

export default Contact;
import './contact.css';
