import React from 'react';
import Title from '../components/Title';
import Info from '../components/Info';
import Skills from '../components/Skills';


function About() {
return (
    <section id='about' className='about'>
      <div>
        <Title title={'About Me'} span={'About me'} />
        <Info />
        <Title title={'My Skills'} span={'My Skills'} />
      <div className="skills-container">
        <Skills skill={'UI / UX Design'} progress={'82%'} width={'82%'} />
        <Skills skill={'HTML'} progress={'87%'} width={'87%'} />
        <Skills skill={'CSS'} progress={'73%'} width={'73%'} />
        <Skills skill={'SASS'} progress={'71%'} width={'71%'} />
        <Skills skill={'JavaScript'} progress={'64%'} width={'64%'} />
        <Skills skill={'ReactJS'} progress={'68%'} width={'68%'} />
      </div>
      <hr/>
      </div>
    </section>
    )
}

export default About