import React from 'react'
import Info from '../../components/Info'
import { RiDownload2Line } from "react-icons/ri";
import Stats from '../../components/Stats';
import './about.css';
import { skill } from '../../Data';
import Skillsltem from '../../components/Skillsltem';
import { resume } from '../../Data';
import { sward } from '../../Data';
import Resumeltem from '../../components/Resumeltem';

const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section-title'>
          About <span>Me</span>
        </h2>
        <div className='about-container grid'>
          <div className='about-info'>
            <h3 className="section-subtitle">Personal Infos</h3>
          
            <ul className="info-list grid">
              <Info />
            </ul>

            <a
              href="https://drive.google.com/file/d/19BnFXlf8qkGVFGRDzzxaDgMjhfcT95U_/view?usp=sharing"
              className="button"
            >
              Download CV


              <span className='button-icon'>
                <RiDownload2Line />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className='separator'>

      </div>
      <section className='skills'>
        <h3 className='section-subtitle subtitle-center'>My Skills</h3>


        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">VFX Compositing & 3D Pipeline </h3>
              <div className="skills-items grid">
                {skill.map((val)=>{
                  if(val.category == 'Video & Motion'){
                    return <Skillsltem key={val.id} {...val}/>;
                  }
                })}
              </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Technical Background</h3>
              <div className="skills-items grid">
                {skill.map((val)=>{
                    if (val.category === 'designer'){
                      return <Skillsltem key={val.id} {...val}/>;
                    }
                  })}
              </div>
          </div>
        </div>
      </section>

      <div className='separator'></div>
      <section className='resume'>
        <h3 className='section-subtitle subtitle-center'>
           경험 및 교육
        </h3>

        <div className='resume-container grid'>
          <div className='resume-group grid'>
            {resume.map((val)=>{
              if(val.category == 'experience'){
                return <Resumeltem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className='resume-group grid'>
            {resume.map((val)=>{
              if(val.category == 'education'){
                return <Resumeltem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
      

    
      <div className='separator'></div>
      <section className='sward'>
        <h3 className='section-subtitle subtitle-center'>
        수상 및 라이센스
        </h3>

        <div className='sward-container grid'>
          <div className='sward-group grid'>
            {sward.map((val)=>{
              if(val.category == 'certificate'){
                return <Resumeltem key={val.id} {...val} />;
              }
            })}
          </div>

              <div className='sward-group grid'>
          {sward
            .filter((val) => ['awards', 'awardsd'].includes(val.category))
            .map((val) => (
              <Resumeltem key={val.id} {...val} />
            ))}
        </div>
        </div>
      </section>

    </main>
  )
}

export default About