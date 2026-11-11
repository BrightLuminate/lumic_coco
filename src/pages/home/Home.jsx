import React from 'react'
import Profile from "../../assets/home.jpeg";
import { Link } from 'react-router';
import { RiArrowRightFill } from "react-icons/ri";
import { FaGithub, FaYoutube, FaInstagram, FaFacebookF, FaBed, FaBandAid, FaBandcamp, FaBabyCarriage, FaBackward, FaBacon } from "react-icons/fa";
import './home.css';

const Home = () => {
  return (
    <section className='home-container grid'> 

      <div className='home-img-wrapper'>
        <div className='rotating-circle'></div>

        <img 
          src={Profile} 
          alt='Dohyun Choi Profile' 
          className='home-img'
        />

        <div className='social-links'>
          <a href='https://github.com/BrightLuminate?tab=repositories' target='_blank' rel='noopener noreferrer'>
            <FaGithub />
          </a>

          <a href='https://www.youtube.com/@lumic_coco' target='_blank' rel='noopener noreferrer'>
            <FaYoutube />
          </a>

          <a href='https://www.instagram.com/shinys7777/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>

          <a href='https://www.facebook.com/profile.php?id=61586956666151&locale=ko_KR' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF />
          </a>
           <a href='https://www.facebook.com/profile.php?id=61586956666151&locale=ko_KR' target='_blank' rel='noopener noreferrer'>
            <FaBandAid/>
          </a>
        </div>
      </div>

      <div className='home-content'>
        <p className='home-subtitle'>안녕하세요. VFX 합성 아티스트 최도현입니다.</p>

        <h1 className='home-title'>
          Junior <span>VFX Compositor</span>
        </h1>

        <h2 className='home-headline'>
          보이지 않는 디테일로<br />
          장면의 현실감을 완성하는<br />
          VFX 합성 아티스트.
        </h2>

        <div className='home-tags'>
          <span>Keying</span>
          <span>Rotoscoping</span>
          <span>Tracking</span>
          <span>Clean-up</span>
          <span>Color Matching</span>
        </div>

        <p className='home-description'>
          실사와 디지털 요소가 자연스럽게 연결되는 장면을 만들기 위해
          키잉, 로토스코핑, 트래킹, 클린업, 컬러 매칭을 중심으로 학습하고 있습니다.
          모션그래픽과 개발 경험을 바탕으로 감각적인 화면 구성과 기술적인 문제 해결력을
          함께 갖춘 Compositor로 성장하고 있습니다.
        </p>

        <div className='home-buttons'>
          <Link to='/about' className='button'>
            About Me
            <span className="button-icon">
              <RiArrowRightFill />
            </span>
          </Link>

          <Link to='/portfolio' className='button button-outline'>
            View Portfolio
          </Link>
        </div>
      </div>

      <div className='color-block'></div>
    </section>
  )
}

export default Home